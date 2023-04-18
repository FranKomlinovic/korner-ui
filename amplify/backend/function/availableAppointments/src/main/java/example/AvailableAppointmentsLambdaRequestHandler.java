/* Amplify Params - DO NOT EDIT
	API_TERMINIHR_GRAPHQLAPIENDPOINTOUTPUT
	API_TERMINIHR_GRAPHQLAPIIDOUTPUT
	API_TERMINIHR_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

package example;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Map;

public class AvailableAppointmentsLambdaRequestHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    private static final Map<String, String> HEADERS = Map.of("Access-Control-Allow-Origin", "*");
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().registerTypeAdapter(LocalTime.class, new LocalTimeGsonConverter()).registerTypeAdapter(LocalDate.class, new LocalDateGsonConverter()).setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();


    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        String fieldId = request.getPathParameters().get("fieldId");

        return new APIGatewayProxyResponseEvent().withStatusCode(200)
                .withHeaders(HEADERS).withBody(GSON.toJson(new TestClass().getTest(fieldId)));
    }

}