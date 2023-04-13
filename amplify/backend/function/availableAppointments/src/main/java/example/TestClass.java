package example;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class TestClass {
    private static final LocalDate DATE_NOW = LocalDate.now(ZoneId.of("CET"));
    private static final LocalDate DATE_IN_SEVEN_DAYS = DATE_NOW.plusDays(7);
    private static final LocalTime WORKTIME_START = LocalTime.parse("16:00");
    private static final LocalTime WORKTIME_END = LocalTime.parse("23:00");
    private static final LocalTime TIME_NOW = LocalTime.now(ZoneId.of("CET"));
    private static final int NUMBER_OF_DAYS = 7;
    private static final DynamoDBMapper DYNAMO_DB_MAPPER = new DynamoDBMapper(AmazonDynamoDBClientBuilder.standard().build());

    public ResponseDto getTest(String fieldId) {
        List<Appointment> listOfAppointments = databaseQuery(fieldId);
        LocalTime time = getUpcomingHalfHour(TIME_NOW);
        if(WORKTIME_START.isAfter(TIME_NOW)) {
            time = WORKTIME_START;
        }
        List<AvailableAppointmentsDto> firstDay = Main.main(listOfAppointments.stream().filter(a -> a.getDate().equals(DATE_NOW)).collect(Collectors.toList()),
                List.of(DATE_NOW), time, WORKTIME_END);

        final List<LocalDate> allWeek = new ArrayList<>();
        int i = 1;
        while (i < NUMBER_OF_DAYS) {
            allWeek.add(DATE_NOW.plusDays(i));
            i++;
        }
        firstDay.addAll(Main.main(listOfAppointments.stream().filter(a -> !a.getDate().equals(DATE_NOW)).collect(Collectors.toList()),
                allWeek, WORKTIME_START, WORKTIME_END));

        return new ResponseDto(firstDay, listOfAppointments);
    }

    public LocalTime getUpcomingHalfHour(LocalTime now) {
        int currentMinute = now.getMinute();
        LocalTime upcoming30Minutes;

        if (currentMinute >= 30) {
            upcoming30Minutes = now.truncatedTo(ChronoUnit.HOURS).plusMinutes(60);
        } else {
            upcoming30Minutes = now.truncatedTo(ChronoUnit.HOURS).plusMinutes(30);
        }

        return upcoming30Minutes;
    }

    private List<Appointment> databaseQuery(String fieldId) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":fieldIdVal", new AttributeValue().withS(fieldId));
        eav.put(":dateFrom", new AttributeValue().withS(DATE_NOW.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))));
        eav.put(":dateTo", new AttributeValue().withS(DATE_IN_SEVEN_DAYS.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("fieldsID = :fieldIdVal and #date >= :dateFrom and #date <= :dateTo and attribute_not_exists(#deleted)")
                .withExpressionAttributeValues(eav).withExpressionAttributeNames(Map.of("#date", "date", "#deleted", "_deleted"));

        return DYNAMO_DB_MAPPER.scan(Appointment.class, scanExpression).stream().sorted(Comparator.comparing(Appointment::getConfirmed, Comparator.reverseOrder())).collect(Collectors.toList());
    }

}
