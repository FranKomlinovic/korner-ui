package example;

import java.util.List;

public class ResponseDto {
    private final List<AvailableAppointmentsDto> availableAppointments;
    private final List<Appointment> reservedAppointments;

    public ResponseDto(List<AvailableAppointmentsDto> availableAppointments, List<Appointment> reservedAppointments) {
        this.availableAppointments = availableAppointments;
        this.reservedAppointments = reservedAppointments;
    }

    public List<AvailableAppointmentsDto> getAvailableAppointments() {
        return availableAppointments;
    }

    public List<Appointment> getReservedAppointments() {
        return reservedAppointments;
    }
}
