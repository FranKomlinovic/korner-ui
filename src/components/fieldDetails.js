import React, {useEffect, useState} from "react";
import {Auth, DataStore} from "aws-amplify";
import {Fields, Sport} from "../models";
import {Button, Divider, Flex, Grid, View} from "@aws-amplify/ui-react";
import ConfirmAppointmentReservation from "./confirmAppointmentReservation";


const FieldDetails = (items) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [field, setField] = useState(null);
    const [user, setUser] = useState(null);
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        DataStore.query(Fields, items.items[0].fieldsID).then((a) => {
                setField(a);
            }
        );

        Auth.currentSession().then(usr => {
            setUser(usr.getIdToken().payload);
        });

    }, [items.items]);

    function openConfirm(object) {
        object.bookerName = user.given_name + ' ' + user.family_name;
        object.bookerID = user.sub;
        object.sport = Sport.FUTSAL;
        setAppointment(object);
    }


    function test(bol: boolean): string {
        if (bol) {
            return 'warning';
        }
        return 'default';
    }

    return (
        <Flex direction={"column"}>
            <Grid templateColumns="1fr 1fr">
                {items.items.map((item, key) =>
                    (
                        <View>
                            <Button key={key} variation={test(item.confirmed)}
                                    onClick={() => openConfirm(item)}>{item.start} - {item.end}</Button>
                        </View>

                    )
                )}
            </Grid>

            <Divider/>
            {appointment != null && <ConfirmAppointmentReservation field={field} appointment={appointment}/>}
        </Flex>


    );

}


export default FieldDetails;

