import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Button, Flex, SwitchField, withAuthenticator} from "@aws-amplify/ui-react";
import {Dialog, DialogTitle} from "@mui/material";
import {Fields, PossibleAppointments} from "../../models";
import UploadComponent from "../UploadComponent";
import {FieldsUpdateForm} from "../../ui-components";
import {FaCamera, FaInfo, FaPlus, FaClock} from "react-icons/fa";
import PossibleAppointmentsView from "./possibleAppointmentsView";

const FieldOwnerFunctions = ({fieldParam}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [field, setField] = useState()
    const [possibleAppointments, setPossibleAppointments] = useState([])
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [showWorkTime, setShowWorkTime] = useState(false)

    // Sets if user is owner of field
    useEffect(() => {
        setField(fieldParam);
    }, [fieldParam]);

    useEffect(() => {
        DataStore.query(PossibleAppointments, (c) => c.fieldsID.eq(fieldParam.id)).then(a => {
            setPossibleAppointments(a);
        })
    }, [fieldParam, showWorkTime]);


    const addPhotoToField = (photo) => {
        DataStore.save(Fields.copyOf(field, (item) => {
            item.photo = photo.key;
        })).then((a) => {
            setField(a);
            setModalOpen(false);
        });
    };

    const addNewPossibleAppointment = () => {
        setPossibleAppointments([...possibleAppointments, new PossibleAppointments({
            fieldsID: fieldParam.id,
            interval: "HALF_HOUR"
        })])
    };

    return (
        <Flex direction={"column"} marginInline={"1rem"}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Button backgroundColor={"white"} onClick={() => setModalOpen(true)}><FaCamera/></Button>
                <Button  backgroundColor={"white"} onClick={() => setShowUpdateForm(!showUpdateForm)}><FaInfo/></Button>
                <UploadComponent open={modalOpen} uploadSuccessFunction={addPhotoToField}
                                 handleClose={() => setModalOpen(false)} text={"Promijeni sliku terena"}/>
                <Dialog open={showUpdateForm} onClose={() => setShowUpdateForm(false)}>
                    <DialogTitle>Ažuriraj teren</DialogTitle>
                    <FieldsUpdateForm onCancel={() => setShowUpdateForm(false)}
                                      onSuccess={() => {
                                          setShowUpdateForm(false)
                                      }}
                                      fields={field}
                    />
                </Dialog>
                <SwitchField
                    label={<FaClock/>}
                    isChecked={showWorkTime}
                    onChange={(e) => {
                        setShowWorkTime(e.target.checked);
                    }}
                />
            </Flex>

            {showWorkTime && <Flex direction={"column"}>
                {possibleAppointments.map((pA, index) => {
                    return <PossibleAppointmentsView key={index} possibleAppointment={pA}
                                                     allPossibleAppointments={possibleAppointments}/>
                })}
                <Flex justifyContent={"center"}>
                    <Button onClick={addNewPossibleAppointment} variation={"primary"}
                            size={"small"}><FaPlus/></Button>
                </Flex>
            </Flex>}

        </Flex>
    );


}


export default withAuthenticator(FieldOwnerFunctions);

