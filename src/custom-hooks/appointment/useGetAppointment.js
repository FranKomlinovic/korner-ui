import {useCallback, useEffect, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Appointment} from "../../models";
import {getAppointmentStatus} from "../../functions/appointmentUItils";

function useGetAppointment(id) {
    const [appointment, setAppointment] = useState();
    const [field, setField] = useState();
    const [photo, setPhoto] = useState();
    const [status, setStatus] = useState();
    const [loading, setLoading] = useState(true);

    const query = useCallback(() => {
        id && DataStore.query(Appointment, id).then(a => {
            setAppointment(a)
            setStatus(getAppointmentStatus(a))
            setLoading(false);
        });
    }, [id])

    useEffect(() => {
        query();
    }, [query]);

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

    useEffect(() => {
        const subscription = DataStore.observe(Appointment, id).subscribe((model) => {
            setAppointment(model.element);
            setStatus(getAppointmentStatus(model.element))
        });

        return () => {
            subscription.unsubscribe();
        }
    }, [id]);


    return {appointment: appointment, field: field, photo: photo, status: status, loading: loading}
}


export default useGetAppointment;

