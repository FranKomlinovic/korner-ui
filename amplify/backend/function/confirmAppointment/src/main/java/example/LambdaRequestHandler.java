

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
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class LambdaRequestHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    private static final Map<String, String> HEADERS = Map.of("Access-Control-Allow-Origin", "*");
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().registerTypeAdapter(LocalTime.class, new LocalTimeGsonConverter()).registerTypeAdapter(LocalDate.class, new LocalDateGsonConverter()).setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
    private static final DynamoDBMapper DYNAMO_DB_MAPPER = new DynamoDBMapper(AmazonDynamoDBClientBuilder.standard().build());

    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        String fieldId = request.getPathParameters().get("appointmentId");

        Appointment load = DYNAMO_DB_MAPPER.load(Appointment.class, fieldId);
        List<Appointment> overlappingAppointments = getAllAppointmentsForDateAndField(load).stream().filter(a ->
                checkOverlap(load, a)
        ).collect(Collectors.toList());

        for (Appointment overlappingAppointment : overlappingAppointments) {
            overlappingAppointment.setCanceled(true);
            DYNAMO_DB_MAPPER.save(overlappingAppointment);
        }
        load.setConfirmed(true);
        DYNAMO_DB_MAPPER.save(load);
        return new APIGatewayProxyResponseEvent().withStatusCode(200)
                .withHeaders(HEADERS).withBody(GSON.toJson(load));
    }

    private List<Appointment> getAllAppointmentsForDateAndField(Appointment appointment) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":fieldIdVal", new AttributeValue().withS(appointment.getFieldsID()));
        eav.put(":date", new AttributeValue().withS(appointment.getDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("fieldsID = :fieldIdVal and #date = :date and attribute_not_exists(#deleted)")
                .withExpressionAttributeValues(eav).withExpressionAttributeNames(Map.of("#date", "date", "#deleted", "_deleted"));

        return DYNAMO_DB_MAPPER.scan(Appointment.class, scanExpression);
    }

    public boolean checkOverlap(Appointment event1, Appointment event2) {
        return (event1.getStart().isBefore(event2.getEnd()) && event2.getStart().isBefore(event1.getEnd()));
    }


}