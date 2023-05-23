import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Button, Flex, withAuthenticator} from "@aws-amplify/ui-react";
import {Dialog, DialogTitle} from "@mui/material";
import {Fields} from "../../models";
import UploadComponent from "../UploadComponent";
import FieldsUpdateForm from "../../ui-components/FieldsUpdateForm";


const FieldOwnerFunctions = ({fieldParam, updateFieldFunction}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [field, setField] = useState()
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    // Sets if user is owner of field
    useEffect(() => {
        setField(fieldParam);
    }, [fieldParam]);

    const addPhotoToField = (photo) => {
        DataStore.save(Fields.copyOf(field, (item) => {
            item.photo = photo.key;
        })).then((a) => {
            setField(a);
            updateFieldFunction(a);
            setModalOpen(false);
        });
    };

    return (
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Button onClick={() => setModalOpen(true)}>Učitaj sliku</Button>
            <Button onClick={() => setShowUpdateForm(!showUpdateForm)}>Uredi informacije</Button>
            <UploadComponent open={modalOpen} uploadSuccessFunction={addPhotoToField}
                             handleClose={() => setModalOpen(false)} text={"Promijeni sliku profila"}/>
            <Dialog open={showUpdateForm} onClose={() => setShowUpdateForm(false)}>
                <DialogTitle>Ažuriraj teren</DialogTitle>
                <FieldsUpdateForm onCancel={() => setShowUpdateForm(false)}
                                  onSuccess={(a) => {
                                      window.location.reload()
                                      setShowUpdateForm(false)
                                  }}
                                  fields={field}
                />
            </Dialog>
        </Flex>
    );


}


export default withAuthenticator(FieldOwnerFunctions);

