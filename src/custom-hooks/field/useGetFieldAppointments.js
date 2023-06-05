import {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";

function useGetAppointmentResponses(fieldId) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sub = DataStore.observeQuery(Appointment, a => a.fieldsID.eq(fieldId)).subscribe(({items}) => {
            setData(items);
            setLoading(false)
        });

        return () => {
            sub.unsubscribe();
        };
    }, [fieldId]);


    return {data: data, loading: loading}
}

export default useGetAppointmentResponses;
