import {useCallback, useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";

function useGetAppointment(id) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const query = useCallback((appId) => {
        DataStore.query(Appointment, appId).then(a => {
            setData(a);
            setLoading(false);
        });
    }, [])

    useEffect(() => {
        query(id);
    }, [id, query]);

    useEffect(() => {
        const subscription = DataStore.observe(Appointment, id).subscribe((model) => {
            setData(model.element);
            setLoading(false)
        });

        return () => {
            subscription.unsubscribe();
        }
    }, [id]);


    return {data: data, loading: loading}
}


export default useGetAppointment;

