import {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify/datastore';

import {ReccuringAppointment} from "../../models";

function useGetAppointmentRecurringResponses(fieldId) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sub = DataStore.observeQuery(ReccuringAppointment, a => a.and(b => [
            b.fieldsID.eq(fieldId), b.canceled.ne(true)
        ])).subscribe(({items}) => {
            setData(items);
            setLoading(false)
        });

        return () => {
            sub.unsubscribe();
        };
    }, [fieldId]);


    return {data: data, loading: loading}
}

export default useGetAppointmentRecurringResponses;
