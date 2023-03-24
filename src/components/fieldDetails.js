import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import {CreateAppointment} from "../ui-components";
import {Auth, DataStore} from "aws-amplify";
import {Appointment, Fields} from "../models";
import {Button} from "@aws-amplify/ui-react";
import {GrFormClose} from "react-icons/gr";
import {useNavigate} from "react-router-dom";


const FieldDetails = (items) => {
    const daysOfWeek = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modelToShow, setModelToShow] = useState(null);
    const [modelToSave, setModelToSave] = useState(null);
    const [fieldToShow, setFieldToShow] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        DataStore.query(Fields, items.items[0].fieldsID).then((a) => {
                setFieldToShow(a);
            }
        );


    }, [items.items]);

    function openConfirm(object) {
        setModelToSave(object);
        setModelToShow(object);
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function createAppointment() {
        Auth.currentSession().then(user => {
            modelToSave.bookerID = user.getIdToken().payload.sub;
            DataStore.save(new Appointment(modelToSave)).then(appointment => {
                navigate('/createResponse/' + appointment.id)
            });
        });

    }

    function ModalBody() {
        let date = new Date(modelToShow.date);
        let toWrite = daysOfWeek[date.getDay()] + ' ' + date.toLocaleDateString('de-DE');

        return (
            <>
                <h2>Želite li predložiti ovaj termin suigračima?</h2>
                <CreateAppointment day={toWrite} appointment={modelToShow}
                                   field={fieldToShow}/>
            </>);

    }

    function test(bol: boolean): string {
        if (bol) {
            return 'warning';
        }
        return 'default';
    }

    return (
        <>
            <div>
                {items.items.map((item, key) =>
                    (
                        <Button key={key} margin={"5px"} variation={test(item.confirmed)}
                                onClick={() => openConfirm(item)}>{item.start} - {item.end}</Button>
                    )
                )}
            </div>
            <Modal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={closeModal}>
                <Button onClick={closeModal}><GrFormClose/></Button>
                {modelToSave != null && <ModalBody/>}
                <Button backgroundColor={"#009933"} variation="primary" onClick={createAppointment}>Predloži termin suigračima</Button>
                <p>* Teren će automatski biti rezerviran kada barem 10 igrača odgovori pozitivno na ovaj poziv</p>
            </Modal>
        </>


    );

}


export default FieldDetails;

