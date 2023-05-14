import {Button, Flex} from "@aws-amplify/ui-react";
import {FaTrash} from "react-icons/fa";
import {confirmAlert} from "react-confirm-alert";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";

const AppointmentCancelButton = ({appointment, role}) => {

    if (role !== "APPOINTMENT_OWNER" || appointment?.confirmed) {
        if (role !== "FIELD_OWNER") {
            return;
        }
    }

    if (appointment?.canceled) {
        return;
    }
    // Dialog for deleting appointment
    const cancelAppointment = () => {
        confirmAlert({
            title: 'Potvrdi otkazivanje',
            message: 'Želite li otkazati ovaj termin?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => {
                        DataStore.save(Appointment.copyOf(appointment, (item) => {
                            item.canceled = true;
                        })).then()
                    }
                },
                {
                    label: 'Ne'
                }
            ]
        });
    };

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Button variation={"destructive"} onClick={() => cancelAppointment()}><FaTrash/> Otkaži
                termin</Button>
        </Flex>
    )
}

export default AppointmentCancelButton
