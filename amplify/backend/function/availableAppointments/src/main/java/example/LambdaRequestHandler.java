/* Amplify Params - DO NOT EDIT
	API_TERMINIHR_GRAPHQLAPIENDPOINTOUTPUT
	API_TERMINIHR_GRAPHQLAPIIDOUTPUT
	API_TERMINIHR_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

package example;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class LambdaRequestHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    private static final Map<String, String> HEADERS = Map.of("Access-Control-Allow-Origin", "*");
    private static final DynamoDBMapper DYNAMO_DB_MAPPER = new DynamoDBMapper(AmazonDynamoDBClientBuilder.standard().build());
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().registerTypeAdapter(LocalTime.class, new LocalTimeGsonConverter()).registerTypeAdapter(LocalDate.class, new LocalDateGsonConverter()).setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
    private static String fieldId;
    private static final LocalDate dateNow = LocalDate.now(ZoneId.of("CET"));
    private static final LocalTime timeNow = LocalTime.now(ZoneId.of("CET"));


    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        fieldId = request.getPathParameters().get("fieldId");
        List<Appointment> listOfAppointments = getListOfAppointments(fieldId);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setToday(getAppointmentsForDay(dateNow, listOfAppointments));
        responseDto.setTomorrow(getAppointmentsForDay(dateNow.plusDays(1), listOfAppointments));
        responseDto.setDayAfter(getAppointmentsForDay(dateNow.plusDays(2), listOfAppointments));

        return new APIGatewayProxyResponseEvent().withStatusCode(200)
                .withHeaders(HEADERS).withBody(GSON.toJson(responseDto));
    }

    private AppointmentsByLengthDto getAppointmentsForDay(LocalDate localDate, List<Appointment> appointments) {
        LocalTime worktimeStart = LocalTime.parse("16:00");
        LocalTime worktimeEnd = LocalTime.parse("23:00");
        AppointmentsByLengthDto appointmentsByLengthDto = new AppointmentsByLengthDto();

        List<Appointment> scheduledAppointments = getAppointmentsForDate(localDate, appointments);
        appointmentsByLengthDto.setOneHour(getAllAvailableAppointmentsForLength(worktimeStart, worktimeEnd, 60, localDate, scheduledAppointments));
        appointmentsByLengthDto.setOneAndHalfHour(getAllAvailableAppointmentsForLength(worktimeStart, worktimeEnd, 90, localDate, scheduledAppointments));
        appointmentsByLengthDto.setTwoHour(getAllAvailableAppointmentsForLength(worktimeStart, worktimeEnd, 120, localDate, scheduledAppointments));
        return appointmentsByLengthDto;
    }

    private List<AvailableAppointmentsDto> getAllAvailableAppointmentsForLength(LocalTime worktimeStart, LocalTime worktimeEnd, int durationInMinutes, LocalDate localDate, List<Appointment> scheduledAppointments) {
        LocalTime start = worktimeStart;
        if (dateNow.equals(localDate) && timeNow.isAfter(worktimeStart)) {
            if (timeNow.plusMinutes(durationInMinutes).isAfter(worktimeEnd) || timeNow.isAfter(worktimeEnd)) {
                return new ArrayList<>();
            }
            start = timeNow.withMinute(0).withSecond(0).withNano(0).plusHours(1);
        }
        LocalTime end = start.plusMinutes(durationInMinutes);
        List<AvailableAppointmentsDto> availableAppointmentsDtos = new ArrayList<>();
        while (end.isBefore(worktimeEnd.plusMinutes(1))) {
            boolean[] intervalFree = isIntervalFree(start, end, scheduledAppointments);

            boolean isFree = intervalFree[0];

            if (isFree) {
                AvailableAppointmentsDto availableAppointmentsDto = new AvailableAppointmentsDto();
                availableAppointmentsDto.setFieldsID(fieldId);
                availableAppointmentsDto.setStart(start);
                availableAppointmentsDto.setEnd(end);
                availableAppointmentsDto.setConfirmed(intervalFree[1]);
                availableAppointmentsDto.setDate(localDate);
                availableAppointmentsDtos.add(availableAppointmentsDto);
            }

            start = start.plusMinutes(30);
            end = end.plusMinutes(30);
        }

        return availableAppointmentsDtos;
    }

    private boolean[] isIntervalFree(LocalTime start, LocalTime end, List<Appointment> scheduledAppointments) {
        for (Appointment appointment : scheduledAppointments) {
            if (isIntervalOverlapping(start, end, appointment.getStart(), appointment.getEnd())) {
                if (appointment.getConfirmed()) {
                    return new boolean[]{false, true};
                } else {
                    return new boolean[]{true, true};
                }
            }
        }

        return new boolean[]{true, false};
    }

    private boolean isIntervalOverlapping(LocalTime start, LocalTime end, LocalTime appointmentStart, LocalTime appointmentEnd) {
        return (
                (start.isAfter(appointmentStart) && start.isBefore(appointmentEnd)) ||
                        (end.isAfter(appointmentStart) && end.isBefore(appointmentEnd)) ||
                        ((start.isBefore(appointmentStart) || start.equals(appointmentStart)) && (end.isAfter(appointmentEnd) || end.equals(appointmentEnd)))
        );
    }

    private List<Appointment> getAppointmentsForDate(LocalDate localDate, List<Appointment> appointments) {
        return appointments.stream().filter(a -> a.getDate().equals(localDate)).collect(Collectors.toList());
    }

    private List<Appointment> getListOfAppointments(String fieldId) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":fieldIdVal", new AttributeValue().withS(fieldId));
        eav.put(":dateVal", new AttributeValue().withS(dateNow.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("fieldsID = :fieldIdVal "
                        + "and #date >= :dateVal"
                ).withExpressionAttributeValues(eav).withExpressionAttributeNames(Map.of("#date", "date"));

        return DYNAMO_DB_MAPPER.scan(Appointment.class, scanExpression).stream().sorted(Comparator.comparing(Appointment::getConfirmed, Comparator.reverseOrder())).collect(Collectors.toList());
    }


}