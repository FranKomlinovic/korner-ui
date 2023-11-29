import React, {useEffect, useState} from "react";
import {getUrl} from "aws-amplify/storage";
import {KornerFieldInfoNew} from "../ui-components";
import {convertSportsEnumListToString, convertSurfaceEnumToString} from "../functions/converters";
import {Flex} from "@aws-amplify/ui-react";

const FigmaField = ({field}) => {

    const [photo, setPhoto] = useState();
    const [sports, setSports] = useState();
    const [surface, setSurface] = useState();

    useEffect(() => {
        field?.photo ? getUrl({
            key: field?.photo,
            options: {
                validateObjectExistence: true
            },
        }).then(a => {
            setPhoto(a.url);
        }) :
            setPhoto("/no-field.jpg")
        setSports(convertSportsEnumListToString(field?.sports));
        setSurface(convertSurfaceEnumToString(field?.surface))

    }, [field]);


    return (<Flex justifyContent={"center"}>
            <KornerFieldInfoNew
                fields={field}
                photo={photo}
                surface={surface}
                sports={sports}/>
        </Flex>

    );


}

export default FigmaField;
