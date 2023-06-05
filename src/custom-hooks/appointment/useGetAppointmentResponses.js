import {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Response} from "../../models";

function useGetAppointmentResponses(appointmentId) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sub = DataStore.observeQuery(Response, a => a.appointmentID.eq(appointmentId)).subscribe(({items}) => {
            setData(items);
            setLoading(false)
        });

        return () => {
            sub.unsubscribe();
        };
    }, [appointmentId]);


    return {data: data, loading: loading}
}

export default useGetAppointmentResponses;
