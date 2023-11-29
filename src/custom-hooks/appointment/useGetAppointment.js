import {useEffect, useState} from "react";
import {DataStore} from "aws-amplify/datastore";
import {getUrl} from 'aws-amplify/storage';
import {Appointment} from "../../models";
import {getAppointmentStatus} from "../../functions/appointmentUItils";

function useGetAppointment(id) {
    const [appointment, setAppointment] = useState();
    const [field, setField] = useState();
    const [photo, setPhoto] = useState();
    const [status, setStatus] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        id && DataStore.query(Appointment, id).then(a => {
            setAppointment(a)
            setStatus(getAppointmentStatus(a))
            setLoading(false);
        });
    }, [id]);

    useEffect(() => {
        appointment?.Fields?.then(field => {
            setField(field)
        })
    }, [appointment]);

    useEffect(() => {
        field?.photo ?
            getUrl({key: field?.photo}).then(b => {
                setPhoto(b.url);
            }) :
            setPhoto("/no-field.jpg")
    }, [field]);

    useEffect(() => {
        const subscription = id && DataStore.observe(Appointment, id).subscribe((model) => {
            if (model?.element) {
                setAppointment(model.element);
                setStatus(getAppointmentStatus(model.element))
                setLoading(false)
            }
        });

        return () => {
            subscription.unsubscribe();
        }
    }, [id]);


    return {appointment: appointment, field: field, photo: photo, status: status, loading: loading}
}


export default useGetAppointment;

