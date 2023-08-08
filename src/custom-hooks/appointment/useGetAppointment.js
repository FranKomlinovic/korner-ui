import {useCallback, useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";

function useGetAppointment(id) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const query = useCallback(() => {
        DataStore.query(Appointment, id).then(a => {
            setData(a);
            setLoading(false);
        });
    }, [id])

    useEffect(() => {
        query();
        const subscription = DataStore.observe(Appointment, id).subscribe(message => {
            setData(message.element);
        });

        return () => {
            subscription.unsubscribe();
        }
    }, [id, query]);


    return {data: data, loading: loading}
}


export default useGetAppointment;

