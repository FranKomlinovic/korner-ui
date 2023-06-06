import {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Response} from "../../models";
import {SortDirection} from "@aws-amplify/datastore";

function useGetAppointmentResponses(appointmentId) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sub = DataStore.observeQuery(Response, a => a.appointmentID.eq(appointmentId), {
            sort: (s) => s.accepted(SortDirection.DESCENDING).createdAt(SortDirection.ASCENDING)
        }).subscribe(({items}) => {
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
