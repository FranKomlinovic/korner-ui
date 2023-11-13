import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    Flex,
    Heading,
    SelectField,
    SwitchField,
    Text,
    View,
    withAuthenticator
} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import {getCurrentDateInDynamoDbString, getDateInStringFromOffset, getDayOfWeek} from "../../functions/converters";
import {FaCalendarCheck, FaEye, FaRecycle} from "react-icons/fa";


const FieldOwnerAppointments = ({appointments, date, recurringAppointments}) => {
    const [displayAppointments, setDisplayAppointments] = useState();
    const [recAppointments, setRecAppointments] = useState();
    const [showReserved, setShowReserved] = useState(true);
    const [showRecurring, setShowRecurring] = useState(false);
    const [dateToShow, setDateToShow] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setDateToShow(date)
    }, [date]);

    useEffect(() => {
        setDisplayAppointments(appointments.sort((a, b) => a.start > b.start ? 1 : -1).filter(a => a.date === dateToShow && !a.canceled))
    }, [appointments, dateToShow]);

    useEffect(() => {
        if (recurringAppointments) {
            setRecAppointments(Object.entries(
                // What you have done
                recurringAppointments?.reduce((acc, reccApp) => {
                    const day = getDayOfWeek(new Date(reccApp.startDate))

                    // Group initialization
                    if (!acc[day]) {
                        acc[day] = [];
                    }

                    // Grouping
                    // FIX: only pushing the object that contains id and value
                    acc[day].push(reccApp);

                    return acc;
                }, {})
            ).map(([label, options]) => ({label, options})));

        }
    }, [recurringAppointments]);


    const AppointmentButtons = () => {
        return (
            <Flex marginTop={"10px"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                {displayAppointments?.length === 0 ? <Heading>Nema termina</Heading>
                    : displayAppointments?.map((item, key) => (
                        <View key={key}>
                            <Button onClick={() => navigate("/appointment/" + item.id)}
                                    backgroundColor={item.confirmed ? "brand.primary.80" : "brand.secondary.80"}><Heading
                                color={"white"}>{item.bookerName} {item.start} - {item.end} {!item.confirmed ? "*" : ""}</Heading></Button>
                        </View>))}
                {displayAppointments?.filter(a => !a.confirmed).length !== 0 &&
                    <Text>*Termini označeni žuto još nisu potvrđeni</Text>}

            </Flex>
        )
    }

    const RecurringAppointments = () => {
        return (
            <Flex gap={"0.5rem"} marginTop={"1rem"} direction={"column"} justifyContent={"center"}>
                {recAppointments?.length === 0 ? <Heading>Nema termina</Heading>
                    : recAppointments?.map(item => (
                        <Flex alignItems={"stretch"} direction={"column"} key={item.label}>
                            <Heading>{item.label}:</Heading>
                            {item.options.map((b, key) => (
                                <Button key={key} variation={"primary"}
                                        onClick={() => navigate("/recurring/" + b.id)}>
                                    <Flex width={"100%"}>
                                        <Heading color={"white"}>{b.start} - {b.end}</Heading>
                                        <Heading color={"white"}>  {b.bookerName}</Heading>
                                    </Flex>
                                </Button>
                            ))}

                        </Flex>))}
            </Flex>
        )
    }

    return (
        <Flex direction={"column"}>
            <Card marginInline={"1rem"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <FaCalendarCheck onClick={() => setShowReserved(!showReserved)} size={"1.5rem"}/>
                    <Heading level={5}>Rezervirano</Heading>
                    <SwitchField
                        size={"large"}
                        label={<Flex><FaEye/></Flex>}
                        isChecked={showReserved}
                        onChange={(e) => {
                            setShowReserved(e.target.checked);
                        }}
                    />
                </Flex>
                {showReserved && <Flex direction={"column"} marginTop={"1rem"}>
                    <SelectField size={"small"} label="Odaberi datum"
                                 value={new Date(dateToShow).getUTCDate() - new Date().getUTCDate()}
                                 onChange={(e) => setDateToShow(getCurrentDateInDynamoDbString(e.target.value))}>
                        <option value={0}>{getDateInStringFromOffset(0)}</option>
                        <option value={1}>{getDateInStringFromOffset(1)}</option>
                        <option value={2}>{getDateInStringFromOffset(2)}</option>
                        <option value={3}>{getDateInStringFromOffset(3)}</option>
                        <option value={4}>{getDateInStringFromOffset(4)}</option>
                        <option value={5}>{getDateInStringFromOffset(5)}</option>
                        <option value={6}>{getDateInStringFromOffset(6)}</option>
                    </SelectField>
                    {
                        AppointmentButtons()
                    }
                </Flex>}

            </Card>
            <Card marginInline={"1rem"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <FaRecycle onClick={() => setShowRecurring(!showRecurring)} size={"1.5rem"}/>
                    <Heading level={5}>Stalni termini</Heading>
                    <SwitchField
                        size={"large"}
                        label={<Flex><FaEye/></Flex>}
                        isChecked={showRecurring}
                        onChange={(e) => {
                            setShowRecurring(e.target.checked);
                        }}
                    />
                </Flex>
                {showRecurring && <Flex direction={"column"} marginTop={"1rem"}>
                    {RecurringAppointments()}
                </Flex>}

            </Card>
        </Flex>
    )
        ;


}


export default withAuthenticator(FieldOwnerAppointments);

