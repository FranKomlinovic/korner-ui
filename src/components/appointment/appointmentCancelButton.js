import {Button, Flex} from "@aws-amplify/ui-react";
import {FaTrash} from "react-icons/fa";
import {confirmAlert} from "react-confirm-alert";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";
import {useContext} from "react";
import AlertContext from "../../context/alertContext";

const AppointmentCancelButton = ({appointment}) => {

    const alertContext = useContext(AlertContext);

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
                        })).then(() => {
                            alertContext.warning("Otkazali ste termin!")
                        }).catch(() => {
                            alertContext.error("Greška brisanja termina, pokušajte ponovno")
                        })
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
