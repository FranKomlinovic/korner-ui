import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Auth, DataStore} from "aws-amplify";
import {Appointment, Fields, Response} from "../../models";
import {KornerAppointmentInfo, KornerCreateResponse, KornerResponseUserCollection} from "../../ui-components";
import {FaCheck, FaFan, FaMinusCircle, FaQuestion} from "react-icons/fa";
import {Heading} from "@aws-amplify/ui-react";


const CreateResponseWrapper = () => {
    const {appointmentId} = useParams();

    const [appointmentInfo, setAppointmentInfo] = useState();
    const [responses, setResponses] = useState();
    const [field, setField] = useState();
    const [playerName, setPlayerName] = useState();
    const [playerId, setPlayerId] = useState();

    useEffect(() => {
        DataStore.query(Appointment, appointmentId).then((a) => {
                setAppointmentInfo('TODO: Dan ' + a.start + ' - ' + a.end);
                DataStore.query(Fields, a.fieldsID).then((a) => {
                        setField(a);
                    }
                );
            }
        );
    }, [appointmentId]);

    useEffect(() => {
        DataStore.query(Response, (c) =>
            c.appointmentID.eq(appointmentId))
            .then(a => {
                setResponses(a)
            });
    }, [appointmentId]);


    useEffect(() => {
            Auth.currentUserInfo().then(a => {
                let attributes = a.attributes;
                setPlayerName(attributes.given_name + ' ' + attributes.family_name)
                setPlayerId(attributes.sub)
            });
        }, []
    );

    function mapResponseToUserList(response: Response) {
        let icon = (<FaMinusCircle/>);
        if (response.accepted) {
            icon = (<FaCheck/>)
        }
        let name = (response.playerName);
        if (response.playerID === playerId) {
            name = name + '(Ti)';
        }
        let time = new Date(response.createdAt).toLocaleTimeString('de-DE');
        return {icon: icon, name: name, time: time};
    }

    function compareWithId(responses: Response[]) {
        if (responses === undefined) {
            return false;
        }
        return !responses.map(a => a.playerID).includes(playerId);
    }


    return (
        <div>
            <KornerAppointmentInfo field={field} appointmentInfo={appointmentInfo}/>

            {compareWithId(responses) && <KornerCreateResponse name={playerName}/>}

            <Heading className={"amplify-card"} level={6}>Igrači koji dolaze:</Heading>
            <KornerResponseUserCollection className={"amplify-card"} items={responses} overrideItems={({item}) => (
                mapResponseToUserList(item)
            )}/>
        </div>
    );


}


export default CreateResponseWrapper;

