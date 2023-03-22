package example;

public class ResponseDto {
    private AppointmentsByLengthDto today;
    private AppointmentsByLengthDto tomorrow;
    private AppointmentsByLengthDto dayAfter;

    public AppointmentsByLengthDto getToday() {
        return today;
    }

    public void setToday(AppointmentsByLengthDto today) {
        this.today = today;
    }

    public AppointmentsByLengthDto getTomorrow() {
        return tomorrow;
    }

    public void setTomorrow(AppointmentsByLengthDto tomorrow) {
        this.tomorrow = tomorrow;
    }

    public AppointmentsByLengthDto getDayAfter() {
        return dayAfter;
    }

    public void setDayAfter(AppointmentsByLengthDto dayAfter) {
        this.dayAfter = dayAfter;
    }

    @Override
    public String toString() {
        return "ResponseDto{" +
                "today=" + today +
                ", tomorrow=" + tomorrow +
                ", dayAfter=" + dayAfter +
                '}';
    }
}
