import {useEffect, useState} from "react";
import {getUrl} from "aws-amplify/storage";

function useGetPhoto(pic) {
    const [data, setData] = useState("/loader.gif");

    useEffect(() => {

        pic ? getUrl({key: pic}).then(a => {
                setData(a.url);
            }).catch(() => {
                setData("/image-not-found.png")
            }) :
            setData("/image-not-found.png")

    }, [pic]);

    return data;
}

export default useGetPhoto;

