import React, {useEffect, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Fields} from "../../models";
import {useParams} from "react-router-dom";
import {FieldsUpdateForm, KornerFieldInfo} from "../../ui-components";
import FreeAppointmentsView from "../components/freeAppointmentsView";
import {checkIfOwner, convertSportsEnumListToString, convertSurfaceEnumToString} from "../converters";
import {Button, Divider, FileUploader, Flex, withAuthenticator} from "@aws-amplify/ui-react";


const FieldById = ({user}) => {
    const {fieldId} = useParams();
    const [field, setField] = useState(null)
    const [sports, setSports] = useState(null)
    const [photo, setPhoto] = useState(null)
    const [surface, setSurface] = useState(null)
    const [isOwner, setIsOwner] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    useEffect(() => {
        DataStore.query(Fields, fieldId).then((a) => {
            setField(a);
        });
    }, [fieldId, user]);

    useEffect(() => {
        console.log("okida se")
        if (!field) {
           return;
        }
        setSports(convertSportsEnumListToString(field.sports));
        setSurface(convertSurfaceEnumToString(field.surface));
        setIsOwner(checkIfOwner(user) && field.ownerID === user.attributes.sub);
        Storage.get(field.photo).then(b => {
            setPhoto(b);
        }).catch((c) => {
            setPhoto("https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg")
        })

    }, [field, user]);


    const addPhotoToField = (photo) => {
        DataStore.save(Fields.copyOf(field, (item) => {
            item.photo = photo.key;
        })).then((a) => {
            setField(a);
        });
    };

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <KornerFieldInfo fields={field} sports={sports} surface={surface} photo={photo}/>
            {isOwner && <FileUploader
                variation={"button"}
                shouldAutoProceed={true}
                onSuccess={(a) => addPhotoToField(a)}
                hasMultipleFiles={false}
                acceptedFileTypes={['image/*']}
                accessLevel="public"

            />}
            {isOwner && <Button onClick={() => setShowUpdateForm(!showUpdateForm)}>Uredi igralište</Button>}
            {showUpdateForm && <FieldsUpdateForm onCancel={() => setShowUpdateForm(false)}
                                                 onSubmit={a => {setField(a); setShowUpdateForm(false)}}
                fields={field}
            />}
            <Divider/>
            <FreeAppointmentsView field={field} user={user} isOwner={isOwner}/>
        </Flex>
    );


}


export default withAuthenticator(FieldById);

