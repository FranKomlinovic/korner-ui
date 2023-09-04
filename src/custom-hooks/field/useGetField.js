import {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Fields} from "../../models";

function useGetField(id) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sub = DataStore.observeQuery(Fields, a => a.id.eq(id)).subscribe(({items}) => {
            setData(items[0]);
            setLoading(false);
        });

        return () => {
            sub.unsubscribe();
        };
    }, [id]);

    return {data: data, loading: loading}
}

export default useGetField;

