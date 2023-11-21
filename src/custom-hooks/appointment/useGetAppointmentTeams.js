import {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify/datastore';

import {Team} from "../../models";
import {SortDirection} from "@aws-amplify/datastore";

function useGetAppointmentTeams(appointmentId) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sub = DataStore.observeQuery(Team, a => a.appointmentID.eq(appointmentId), {
            sort: (sort) => sort.name(SortDirection.ASCENDING)
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

export default useGetAppointmentTeams;
