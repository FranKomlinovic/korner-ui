import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {KornerFieldShort} from "../../ui-components";

const KornerFieldShortWrapper = ({fields}) => {

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        if (!fields) {
            return;
        }
        Storage.get(fields.photo).then(b => setPhoto(b));

    }, [fields]);

    return (<KornerFieldShort photo={photo} fields={fields}/>);


}

export default KornerFieldShortWrapper;
