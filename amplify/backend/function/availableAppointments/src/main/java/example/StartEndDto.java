package example;

import java.time.LocalDate;
import java.time.LocalTime;

public class StartEndDto {
    private LocalTime start;
    private LocalTime end;
    private LocalDate date;

    public StartEndDto(LocalTime start, LocalTime end) {
        this.start = start;
        this.end = end;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
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


    @Override
    public String toString() {
        return "StartEndDto{" +
                "start=" + start +
                ", end=" + end +
                '}';
    }
}
