package example;

import java.time.LocalDate;
import java.time.LocalTime;

public class AvailableAppointmentsDto {
    private boolean overlaping;
    private LocalTime start;
    private LocalTime end;
    private LocalDate date;
    private long duration;

    public AvailableAppointmentsDto(LocalTime start, LocalTime end, LocalDate date, long duration) {
        this.start = start;
        this.end = end;
        this.date = date;
        this.duration = duration;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public boolean overlapsWith(Appointment other) {
        return this.getStart().isBefore(other.getEnd()) &&
                other.getStart().isBefore(this.getEnd());
    }

    @Override
    public String toString() {
        return "AvailableAppointmentsDto{" +
                "overlaping=" + overlaping +
                ", start=" + start +
                ", end=" + end +
                ", date=" + date +
                ", duration=" + duration +
                '}';
    }
}
