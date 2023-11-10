import {
    Button,
    Card,
    CheckboxField,
    Fieldset,
    Flex,
    Input,
    Label,
    SelectField,
    StepperField, Text
} from "@aws-amplify/ui-react";
import {useEffect, useState} from "react";
import {FaCheck, FaPen, FaSave, FaTimes, FaTrash, FaUndo} from "react-icons/fa";
import {DataStore} from "aws-amplify";
import {PossibleAppointments} from "../../models";
import {confirmAlert} from "react-confirm-alert";


const PossibleAppointmentsView = ({possibleAppointment, allPossibleAppointments}) => {
    const [possibleApp, setPossibleApp] = useState(possibleAppointment)
    const [startTime, setStartTime] = useState("16:00")
    const [endTime, setEndTime] = useState("23:00")
    const [price, setPrice] = useState(30)
    const [interval, setInterval] = useState("HALF_HOUR")
    const [possibleLengths, setPossibleLengths] = useState([])
    const [appointmentDays, setAppointmentDays] = useState([])
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (!possibleApp?.start) {
            setDisabled(false);
            return;
        }
        setStartTime(possibleApp.start)
        setEndTime(possibleApp.end)
        setPrice(possibleApp.priceForHour)
        setInterval(possibleApp.interval)
        setPossibleLengths(possibleApp.possibleLengths)
        setAppointmentDays(possibleApp.days)
    }, [possibleApp, disabled]);

    function possibleLengthContains(a) {
        return possibleLengths?.includes(a);
    }

    function daysContains(a) {
        return appointmentDays?.includes(a);
    }

    const changePossibleDays = (item) => {
        item.checked ? setAppointmentDays([...appointmentDays, item.value])
            : setAppointmentDays(appointmentDays.filter(a => a !== item.value));
    }

    const changePossibleLengths = (item) => {
        item.checked ? setPossibleLengths([...possibleLengths, item.value])
            : setPossibleLengths(possibleLengths.filter(a => a !== item.value));
    }

    const editToggle = () => {
        setDisabled(!disabled);
    }

    const hasOverlap = allPossibleAppointments.filter(obj => {
        return obj.id !== possibleAppointment.id && obj.days?.some(item => appointmentDays.includes(item))
    }).some(a => {
        return a.start < endTime && startTime < a.end
    });

    const isFormValid = () => {
        return startTime && endTime && price
            && interval && possibleLengths.length > 0 && appointmentDays.length > 0 && !hasOverlap;
    }


    const deletePossibleAppointment = () => {
        confirmAlert({
            title: 'Potvrdi brisanje',
            message: 'Želite li obrisati ovo radno vrijeme?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => {
                        DataStore.delete(PossibleAppointments, possibleApp.id).then(() => {
                            setPossibleApp(null)
                        })
                    }
                },
                {
                    label: 'Ne'
                }
            ]
        });
    }
    const updatePossibleAppointment = () => {
        DataStore.query(PossibleAppointments, possibleApp.id).then(possibleAppointmentToUpdate => {
            possibleAppointmentToUpdate ?
                DataStore.save(PossibleAppointments.copyOf(possibleAppointmentToUpdate, (item) => {
                    item.start = startTime;
                    item.end = endTime;
                    item.priceForHour = parseInt(price);
                    item.interval = interval;
                    item.possibleLengths = possibleLengths;
                    item.days = appointmentDays;
                })).then(a => {
                    setPossibleApp(a)
                    setDisabled(true)
                }) : DataStore.save(new PossibleAppointments({
                    fieldsID: possibleApp.fieldsID,
                    start: startTime,
                    end: endTime,
                    priceForHour: parseInt(price),
                    interval: interval,
                    possibleLengths: possibleLengths,
                    days: appointmentDays
                })).then(a => {
                    setPossibleApp(a)
                    setDisabled(true)
                });
        })
    }
    const DaysCheckboxFieldOrTick = ({label, value}) => {
        const isTrue = daysContains(value);
        const icon = isTrue && <FaCheck color={"green"} id={value}/>
        return (disabled ?
            <Flex gap={"0.5rem"} alignItems={"center"} direction={"column"}><Label
                htmlFor={value}>{label}</Label>{icon}
            </Flex> :
            <CheckboxField
                label={label}
                labelPosition={"top"}
                checked={isTrue}
                onChange={(e) => changePossibleDays(e.target)}
                value={value}
                isDisabled={disabled}
                name={value}/>)
    }

    const LengthCheckboxFieldOrTick = ({label, value}) => {
        const isTrue = possibleLengthContains(value);
        const icon = isTrue ? <FaCheck color={"green"} id={value}/> : <FaTimes color={"red"}></FaTimes>
        return (disabled ?
            <Flex gap={"0.5rem"} alignItems={"center"}>{icon}<Label fontSize={"small"} htmlFor={value}>{label}</Label>
            </Flex> :
            <CheckboxField
                size={"small"}
                label={label}
                labelPosition={"end"}
                checked={isTrue}
                onChange={(e) => changePossibleLengths(e.target)}
                value={value}
                isDisabled={disabled}
                name={value}/>)
    }


    return (
        possibleApp &&
        <Card variation={"elevated"} marginInline={"1rem"}>
            <Flex direction={"column"}>
                <Flex justifyContent={"space-between"}>
                    <Fieldset legendHidden variation={"plain"} direction={"row"} legend={"Moguća trajanja"}>
                        <DaysCheckboxFieldOrTick label={"Pon"} value={"MONDAY"} labelPosition={"top"}/>
                        <DaysCheckboxFieldOrTick label={"Uto"} value={"TUESDAY"} labelPosition={"top"}/>
                        <DaysCheckboxFieldOrTick label={"Sri"} value={"WEDNESDAY"} labelPosition={"top"}/>
                        <DaysCheckboxFieldOrTick label={"Čet"} value={"THURSDAY"} labelPosition={"top"}/>
                        <DaysCheckboxFieldOrTick label={"Pet"} value={"FRIDAY"} labelPosition={"top"}/>
                        <DaysCheckboxFieldOrTick label={"Sub"} value={"SATURDAY"} labelPosition={"top"}/>
                        <DaysCheckboxFieldOrTick label={"Ned"} value={"SUNDAY"} labelPosition={"top"}/>
                    </Fieldset>
                    <Flex alignSelf={"start"}>
                        <Button onClick={editToggle}
                                variation={disabled ? "link" : "warning"}>
                            {disabled ? <FaPen/> : <FaUndo/>}
                        </Button>
                    </Flex>

                </Flex>
                <Flex>
                    <Flex direction={"column"} gap={"0.2rem"}>
                        <Label fontSize={"small"} htmlFor="startTime">Početak</Label>
                        <Input onChange={(a) => setStartTime(a.currentTarget.value)}
                               value={startTime}
                               hasError={startTime >= endTime}
                               isDisabled={disabled}
                               id={"startTime"} size={"small"} type={"time"}/>
                    </Flex>
                    <Flex direction={"column"} gap={"0.2rem"}>
                        <Label fontSize={"small"} htmlFor="endTime">Kraj</Label>
                        <Input onChange={(a) => setEndTime(a.currentTarget.value)}
                               value={endTime}
                               hasError={startTime >= endTime}
                               isDisabled={disabled}
                               id={"endTime"} size={"small"} type={"time"}/>
                    </Flex>
                    <StepperField
                        label="Cijena (€/sat)"
                        isDisabled={disabled}
                        value={price}
                        onStepChange={a => setPrice(a)}
                        step={1}
                        size={"small"}
                    />
                </Flex>
                <Flex justifyContent={"center"}>
                    <SelectField
                        size={"small"}
                        label="Interval"
                        onChange={(a) => setInterval(a.currentTarget.value)}
                        value={interval}
                        isDisabled={disabled}
                    >
                        <option value="HALF_HOUR">0:30h</option>
                        <option value="HOUR">1:00h</option>
                        <option value="HOUR_AND_HALF">1:30h</option>
                        <option value="TWO_HOURS">2:00h</option>
                    </SelectField>

                    <Flex direction={"column"} justifyContent={"center"}>
                        <Label fontSize={"small"}>Trajanje</Label>
                        <Fieldset legendHidden variation={"plain"} direction={"row"} legend={"Moguća trajanja"}>
                            <LengthCheckboxFieldOrTick label={"1:00h"} value={"HOUR"}/>
                            <LengthCheckboxFieldOrTick label={"1:30h"} value={"HOUR_AND_HALF"}/>
                            <LengthCheckboxFieldOrTick label={"2:00h"} value={"TWO_HOURS"}/>
                        </Fieldset>
                    </Flex>
                </Flex>
                {hasOverlap && <Text variation={"warning"}>Radno vrijeme se preklapa</Text>}
                {!disabled &&
                    <Flex justifyContent={"space-between"}>
                        <Button isDisabled={!isFormValid()} onClick={updatePossibleAppointment}
                                variation={"primary"}><FaSave/> Spremi</Button>
                        <Button onClick={deletePossibleAppointment}
                                variation={"destructive"}><FaTrash/> Obriši</Button>
                    </Flex>
                }
            </Flex>
        </Card>
    )
}

export default PossibleAppointmentsView
