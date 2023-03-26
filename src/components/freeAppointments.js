import {API} from "aws-amplify";
import React, {useEffect, useState} from "react";
import FieldDetails from "./fieldDetails";
import {Flex, Heading, SelectField, TabItem, Tabs, Text} from "@aws-amplify/ui-react";
import {BiSad} from "react-icons/bi";
import {getDateInString} from "./converters";

const FreeAppointments = (fieldId) => {
    const [appointments, setAppointments] = useState();
    const [displayAppointments, setDisplayAppointments] = useState(null);

    useEffect(() => {
        API.get('availableAppointments', '/appointments/available/' + fieldId.fieldId).then(
            a => {
                setAppointments(a);
                setDisplayAppointments(a.today);
            }
        )
    }, [fieldId.fieldId]);

    if (!displayAppointments) {
        return <div>Loading...</div>;
    }

    function displayDay(test: number) {
        switch (test) {
            case "tomorrow":
                setDisplayAppointments(appointments.tomorrow);
                return;
            case "dayAfter":
                setDisplayAppointments(appointments.dayAfter);
                return;
            default:
                setDisplayAppointments(appointments.today);
                return;
        }
    }

    function getFieldDetails(duration: string, items: []) {
        if (items.length === 0) {
            return (<Text padding={"10px"}><BiSad/> Nema raspoloživih termina...</Text>);
        } else {
            return (
                <Flex paddingTop={"10px"}>
                    <FieldDetails items={items}></FieldDetails>
                </Flex>);
        }
    }

    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const dayAfter = new Date(now.getTime() + 48 * 60 * 60 * 1000);
    return (
        <Flex direction={"column"} paddingLeft={"10px"}>
            <Heading level={5}>Rezerviraj termin:</Heading>
            <SelectField label="Odaberi datum" onChange={(e) => displayDay(e.target.value)}>
                <option value="today">{getDateInString(now)} (danas)</option>
                <option value="tomorrow">{getDateInString(tomorrow)} (sutra)</option>
                <option value="dayAfter">{getDateInString(dayAfter)} (prekosutra)</option>

            </SelectField>

            <Flex direction={"column"}>
                <label className={"amplify-label"}>Trajanje termina</label>
                <Tabs>
                    <TabItem title="1h">
                        {getFieldDetails('1h', displayAppointments.oneHour)}
                    </TabItem>
                    <TabItem title="1.5h">
                        {getFieldDetails('1.5h', displayAppointments.oneAndHalfHour)}
                    </TabItem>
                    <TabItem title="2h">
                        {getFieldDetails('2h', displayAppointments.twoHour)}
                    </TabItem>
                </Tabs>
            </Flex>

        </Flex>
    )
}

export default FreeAppointments;
