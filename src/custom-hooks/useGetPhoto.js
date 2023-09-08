import {useEffect, useState} from "react";
import {Storage} from "aws-amplify";

function useGetPhoto(pic) {
    const [data, setData] = useState("/loader.gif");

    useEffect(() => {
        pic ?
            Storage.get(pic).then(a => {
                setData(a);
            }).catch(() => {
                setData("/image-not-found.png")
            }) :
            setData("/image-not-found.png")

    }, [pic]);

    return data;
}

export default useGetPhoto;

