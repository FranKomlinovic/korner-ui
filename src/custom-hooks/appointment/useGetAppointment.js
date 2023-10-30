import {useEffect, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Appointment} from "../../models";
import {getAppointmentStatus} from "../../functions/appointmentUItils";

function useGetAppointment(id) {
    const [appointment, setAppointment] = useState();
    const [field, setField] = useState();
    const [photo, setPhoto] = useState();
    const [status, setStatus] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        DataStore.query(Appointment, id).then(a => {
            setAppointment(a);
            setStatus(getAppointmentStatus(a))
            setLoading(false);
        })
    }, [id]);

    useEffect(() => {
        appointment?.Fields?.then(field => {
            setField(field)
        })
    }, [appointment]);

    useEffect(() => {
        field?.photo ?
            Storage.get(field.photo).then(b => {
                setPhoto(b);
            }) :
            setPhoto("/no-field.jpg")
    }, [field]);


    return {appointment: appointment, field: field, photo: photo, status: status, loading: loading}
}


export default useGetAppointment;

