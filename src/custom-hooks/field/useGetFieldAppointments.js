import {useCallback, useEffect, useState} from "react";
import {DataStore} from 'aws-amplify/datastore';

import {Appointment} from "../../models";

function useGetAppointmentResponses(fieldId, date) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const query = useCallback(() => {
        fieldId && date && DataStore.query(Appointment, (a) => a.and((l) => [l.fieldsID.eq(fieldId), l.date.eq(date)])).then(a => {
            setData(a);
            setLoading(false);
        });
    }, [fieldId, date])

    useEffect(() => {
        query();
        const sub = DataStore.observeQuery(Appointment, (a) => a.and((l) => [l.fieldsID.eq(fieldId), l.date.eq(date)])).subscribe(({items}) => {
            setData(items);
            setLoading(false)
        });

        return () => {
            sub.unsubscribe();
        };
    }, [date, fieldId, query]);


    return {data: data, loading: loading}
}

export default useGetAppointmentResponses;
