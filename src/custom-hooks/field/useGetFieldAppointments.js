import {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";

function useGetAppointmentResponses(fieldId, date) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sub = DataStore.observeQuery(Appointment, (a) => a.and((l) => [l.fieldsID.eq(fieldId), l.date.eq(date)])).subscribe(({items}) => {
            setData(items);
            setLoading(false)
        });

        return () => {
            sub.unsubscribe();
        };
    }, [date, fieldId]);


    return {data: data, loading: loading}
}

export default useGetAppointmentResponses;
