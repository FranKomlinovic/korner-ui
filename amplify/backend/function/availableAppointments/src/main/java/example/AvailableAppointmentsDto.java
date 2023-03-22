package example;

import java.time.LocalDate;
import java.time.LocalTime;

public class AvailableAppointmentsDto {
    private boolean confirmed;
    private LocalTime start;
    private LocalTime end;
    private String fieldsID;
    private LocalDate date;

    public boolean isConfirmed() {
        return confirmed;
    }

    public void setConfirmed(boolean confirmed) {
        this.confirmed = confirmed;
    }

    public LocalTime getStart() {
        return start;
    }

    public void setStart(LocalTime start) {
        this.start = start;
    }

    public LocalTime getEnd() {
        return end;
    }

    public void setEnd(LocalTime end) {
        this.end = end;
    }

    public String getFieldsID() {
        return fieldsID;
    }

    public void setFieldsID(String fieldsID) {
        this.fieldsID = fieldsID;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "AvailableAppointmentsDto{" +
                "confirmed=" + confirmed +
                ", start=" + start +
                ", end=" + end +
                ", fieldsID='" + fieldsID + '\'' +
                ", date=" + date +
                '}';
    }
}
