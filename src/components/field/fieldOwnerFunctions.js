import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Button, Card, Flex, Heading, Label, SwitchField, withAuthenticator} from "@aws-amplify/ui-react";
import {Fields, PossibleAppointments} from "../../models";
import UploadComponent from "../UploadComponent";
import {FieldsUpdateForm} from "../../ui-components";
import {FaCamera, FaClock, FaEye, FaInfo, FaPlus} from "react-icons/fa";
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
        const subscription = DataStore.observeQuery(PossibleAppointments, (c) => c.fieldsID.eq(fieldParam.id))
            .subscribe((resp) => {
                setPossibleAppointments(resp.items);
            });

        return () => subscription.unsubscribe();
    }, [fieldParam]);

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
        <Flex direction={"column"}>

            <UploadComponent open={modalOpen} uploadSuccessFunction={addPhotoToField}
                             handleClose={() => setModalOpen(false)} text={"Promijeni sliku terena"}/>
            <Card marginInline={"1rem"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <FaInfo onClick={() => setShowUpdateForm(!showUpdateForm)} size={"1.5rem"}/>
                    <Heading level={5}>Informacije</Heading>
                    <SwitchField
                        alignSelf={"center"}
                        label={<Flex><FaEye/></Flex>}
                        size={"large"}
                        isChecked={showUpdateForm}
                        onChange={(e) => {
                            setShowUpdateForm(e.target.checked);
                        }}
                    />
                </Flex>

                {showUpdateForm &&
                    <Flex gap={"0rem"} marginTop={"1rem"} direction={"column"}>
                        <Flex paddingInline={"20px"} gap={"0.1rem"} alignItems={"start"} direction={"column"} justifyContent={"start"}>
                         <Label>Učitaj fotografiju</Label>
                            <Button variation={"primary"} onClick={() => setModalOpen(true)}><FaCamera/></Button>
                        </Flex>
                        <FieldsUpdateForm onCancel={() => setShowUpdateForm(false)}
                                          onSuccess={() => {
                                              setShowUpdateForm(false)
                                          }}
                                          fields={field}/>
                    </Flex>}
            </Card>

            <Card marginInline={"1rem"}>
                <Flex direction={"column"}>
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <FaClock onClick={() => setShowWorkTime(!showWorkTime)} size={"1.5rem"}/>
                        <Heading level={5}>Radno vrijeme</Heading>
                        <SwitchField
                            label={<Flex><FaEye/></Flex>}
                            size={"large"}
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

            </Card>


        </Flex>
    );


}


export default withAuthenticator(FieldOwnerFunctions);

