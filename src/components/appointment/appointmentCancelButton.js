import {Button, Flex} from "@aws-amplify/ui-react";
import {FaTrash} from "react-icons/fa";
import {confirmAlert} from "react-confirm-alert";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";

const AppointmentCancelButton = ({appointment, role}) => {

    if (role !== "APPOINTMENT_OWNER" || appointment?.canceled || appointment?.confirmed) {
        return;
    }
    // Dialog for deleting appointment
    const cancelAppointment = () => {
        confirmAlert({
            title: 'Potvrdi brisanje',
            message: 'Želite li obrisati ovu rezervaciju?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => {
                        DataStore.save(Appointment.copyOf(appointment, (item) => {
                            item.canceled = true;
                        }))
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
