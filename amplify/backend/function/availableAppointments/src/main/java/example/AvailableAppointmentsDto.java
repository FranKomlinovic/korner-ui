package example;

import java.time.LocalDate;
import java.time.LocalTime;

public class AvailableAppointmentsDto {
    private boolean overlaping;
    private LocalTime start;
    private LocalTime end;
    private String fieldsID;
    private LocalDate date;
    private int duration;

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public boolean isOverlaping() {
        return overlaping;
    }

    public void setOverlaping(boolean overlaping) {
        this.overlaping = overlaping;
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
                "overlaping=" + overlaping +
                ", start=" + start +
                ", end=" + end +
                ", fieldsID='" + fieldsID + '\'' +
                ", date=" + date +
                '}';
    }
}
