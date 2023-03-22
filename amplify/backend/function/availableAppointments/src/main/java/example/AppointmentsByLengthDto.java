package example;

import java.util.List;

public class AppointmentsByLengthDto {
    private List<AvailableAppointmentsDto> oneHour;
    private List<AvailableAppointmentsDto> oneAndHalfHour;
    private List<AvailableAppointmentsDto> twoHour;

    public List<AvailableAppointmentsDto> getOneHour() {
        return oneHour;
    }

    public void setOneHour(List<AvailableAppointmentsDto> oneHour) {
        this.oneHour = oneHour;
    }

    public List<AvailableAppointmentsDto> getOneAndHalfHour() {
        return oneAndHalfHour;
    }

    public void setOneAndHalfHour(List<AvailableAppointmentsDto> oneAndHalfHour) {
        this.oneAndHalfHour = oneAndHalfHour;
    }

    public List<AvailableAppointmentsDto> getTwoHour() {
        return twoHour;
    }

    public void setTwoHour(List<AvailableAppointmentsDto> twoHour) {
        this.twoHour = twoHour;
    }

    @Override
    public String toString() {
        return "AppointmentsByLengthDto{" +
                "oneHour=" + oneHour +
                ", oneAndHalfHour=" + oneAndHalfHour +
                ", twoHour=" + twoHour +
                '}';
    }
}
