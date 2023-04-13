import React, {useEffect, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Fields} from "../../models";
import {useParams} from "react-router-dom";
import {FieldsUpdateForm, KornerFieldInfo} from "../../ui-components";
import FreeAppointmentsView from "../components/freeAppointmentsView";
import {checkIfOwner, convertSportsEnumListToString, convertSurfaceEnumToString} from "../converters";
import UploadComponent from "../components/UploadComponent";
import {Button, Divider, Flex, Heading, withAuthenticator} from "@aws-amplify/ui-react";
import {Dialog, DialogTitle} from "@mui/material";


const FieldById = ({user}) => {
    const {fieldId} = useParams();
    const [field, setField] = useState()
    const [fieldAdditionalInfo, setFieldAdditionalInfo] = useState()
    const [photo, setPhoto] = useState("/no-field.jpg")
    const [isOwner, setIsOwner] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const {sub} = user.getSignInUserSession().getIdToken().payload

    // Gets field by id
    useEffect(() => {
        DataStore.query(Fields, fieldId).then((a) => {
            setField(a);
        });
    }, [fieldId]);

    // Sets if user is owner of field
    useEffect(() => {
        setIsOwner(checkIfOwner(user) && field?.ownerID === sub);
    }, [field, user, sub]);

    useEffect(() => {
        if (!field) {
            return;
        }
        setFieldAdditionalInfo({
            sports: convertSportsEnumListToString(field?.sports),
            surface: convertSurfaceEnumToString(field?.surface)
        })
        Storage.get(field?.photo).then(b => {
            setPhoto(b);
        }).catch(() => {
            setPhoto("/no-field.jpg")
        })

    }, [field]);

    const addPhotoToField = (photo) => {
        DataStore.save(Fields.copyOf(field, (item) => {
            item.photo = photo.key;
        })).then((a) => {
            setField(a);
            setModalOpen(false);
        });
    };

    const OwnerView = () => {
        if (!isOwner) {
            return;
        }
        return (
            <Flex>
                <Button variation={"menu"} onClick={() => setModalOpen(true)}>Učitaj sliku</Button>
                <Button variation={"menu"} onClick={() => setShowUpdateForm(!showUpdateForm)}>Uredi igralište</Button>
                <UploadComponent open={modalOpen} uploadSuccessFunction={addPhotoToField}
                                 handleClose={() => setModalOpen(false)} text={"Promijeni sliku profila"}/>
                <Dialog open={showUpdateForm} onClose={() => setShowUpdateForm(false)}>
                    <DialogTitle>Ažuriraj teren</DialogTitle>
                    <FieldsUpdateForm onCancel={() => setShowUpdateForm(false)}
                                      onSuccess={() => {
                                          window.location.reload()
                                          setShowUpdateForm(false)
                                      }}
                                      fields={field}
                    />
                </Dialog>
            </Flex>)
    };

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <KornerFieldInfo fields={field} sports={fieldAdditionalInfo?.sports} surface={fieldAdditionalInfo?.surface}
                             photo={photo}/>
            <OwnerView/>
            <Divider/>
            <FreeAppointmentsView field={field} user={user} isOwner={isOwner}/>
        </Flex>
    );


}


export default withAuthenticator(FieldById);

