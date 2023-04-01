package example;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    private static final List<Duration> DURATIONS = List.of(Duration.ofHours(1), Duration.ofMinutes(90), Duration.ofHours(2));
    private static final Duration OFFSET_IN_MINUTES = Duration.ofMinutes(30);

    public static List<AvailableAppointmentsDto> main(List<Appointment> bookedSlots, List<LocalDate> date, LocalTime start, LocalTime end) {

        return date.stream()
                .flatMap(a ->
                        generateAvailableTimeSlots(start, end, a, OFFSET_IN_MINUTES, bookedSlots, DURATIONS)
                                .stream())
                .collect(Collectors.toList());
    }

    public static List<AvailableAppointmentsDto> generateAvailableTimeSlots(LocalTime startTime, LocalTime endTime,
                                                                            LocalDate date,
                                                                            Duration timeInterval, List<Appointment> bookedSlots, List<Duration> durations) {
        List<AvailableAppointmentsDto> timeSlots = new ArrayList<>();

        // generate all possible time slots of the given durations
        for (Duration duration : durations) {
            LocalTime slotStart = startTime;
            while (slotStart.isBefore(slotStart.plus(duration)) && (slotStart.plus(duration).isBefore(endTime) || slotStart.plus(duration).equals(endTime))) {
                AvailableAppointmentsDto timeSlot = new AvailableAppointmentsDto(slotStart, slotStart.plus(duration), date, duration.toMinutes());
                boolean[] slotAvailable = isSlotAvailable(timeSlot, bookedSlots);
                if (slotAvailable[0]) {
                    if (slotAvailable[1]) {
                        timeSlot.setOverlaping(true);
                    }
                    timeSlots.add(timeSlot);
                }
                slotStart = slotStart.plus(timeInterval);
            }
        }

        return timeSlots;
    }

    public static boolean[] isSlotAvailable(AvailableAppointmentsDto slot, List<Appointment> bookedSlots) {
        for (Appointment bookedSlot : bookedSlots) {
            if (slot.overlapsWith(bookedSlot)) {
                if (bookedSlot.getConfirmed()) {
                    return new boolean[]{false, false};
                }
                return new boolean[]{true, true};
            }
        }
        return new boolean[]{true, false};
    }
}
