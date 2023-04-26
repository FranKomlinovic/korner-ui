import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {KornerFieldInfoNew} from "../ui-components";
import {convertSportsEnumListToString, convertSurfaceEnumToString} from "../components/converters";

const FigmaField = ({field}) => {

    const [photo, setPhoto] = useState("/no-field.jpg");
    const [sports, setSports] = useState();
    const [surface, setSurface] = useState();

    useEffect(() => {
        field?.photo ?
            Storage.get(field?.photo).then(b => {
                setPhoto(b);
            }) :
            setPhoto("/no-field.jpg")
        setSports(convertSportsEnumListToString(field?.sports));
        setSurface(convertSurfaceEnumToString(field?.surface))

    }, [field]);


    return (
        <KornerFieldInfoNew
            fields={field}
            photo={photo}
            surface={surface}
            sports={sports}/>
    );


}

export default FigmaField;
