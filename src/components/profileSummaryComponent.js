import React, {useEffect, useState} from "react";
import {Badge, Button, Card, Flex, Heading, Image} from "@aws-amplify/ui-react";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {DataStore, Storage} from "aws-amplify";
import {User} from "../models";
import {FaCheck, FaEquals, FaMinus, FaQuestion} from "react-icons/fa";


const ProfileSummaryComponent = ({cognitoUser, userResponses}) => {
    const [photo, setPhoto] = useState();
    const [user, setUser] = useState();
    const [outcomes, setOutcomes] = useState([]);
    const [responses, setResponses] = useState([]);
    const [appointments, setAppointments] = useState([]);

    //Gets user picture
    useEffect(() => {
        cognitoUser && DataStore.query(User, a => a.sub.eq(cognitoUser?.attributes?.sub)).then(a => {
            setUser(a[0]);
        })

    }, [cognitoUser]);

    //Gets only accepted responses
    useEffect(() => {
        setResponses(userResponses?.filter(b => b.accepted));
    }, [userResponses]);

    //Gets user picture
    useEffect(() => {
        const outs = []
        responses?.forEach(a => {
            a?.Team?.then(b => {
                b ?
                    b.outcome ?
                        b.outcome?.forEach(c => {
                            outs.push(c)
                        }) : outs.push("undefined") :
                    console.log("No team")
            })
        })
        setOutcomes(outs)

    }, [responses]);

    //Gets user picture
    useEffect(() => {
        const playedResps = []
        responses?.forEach(a => {
            a?.Appointment?.then(b => {
                b?.confirmed ? playedResps.push(a) : console.log("not played")
            })
        })
        setAppointments(playedResps)

    }, [responses]);


    //Gets user picture
    useEffect(() => {
        user && Storage.get(user?.picture).then(b => {
            setPhoto(b);
        }).catch(() => {
            setPhoto("/no-picture.png")
        })
    }, [user]);

    const convertToIcon = (a) => {
        if (a === "WIN") {
            return <Badge
                size="small"
                variation="success">
                W
            </Badge>
        } else if (a === "LOSE") {
            return<Badge
                size="small"
                variation="error">
                L
            </Badge>
        } else if (a === "DRAW") {
            return <Badge
                size="small"
                variation="warning">
                D
            </Badge>
        } else {
            return <Badge
                size="small"
                variation="info">
                ?
            </Badge>
        }
    }
    return (
        user ?
            <Flex>
                <Card variation={"elevated"} marginInline={"1rem"}>
                    <Flex direction={"column"}>
                        <Heading level={4}>{user?.name}</Heading>
                        <Flex alignItems={"center"}>
                            <Image alt={"Profile photo"} width={"5rem"} height={"5rem"} objectFit={"cover"}
                                   borderRadius={400}
                                   src={photo}/>
                            <Flex direction={"column"}>
                                <Heading>Ocjena: 56</Heading>
                                <Heading>Odigrani termini: {appointments.length}</Heading>
                                <Flex gap={"0.5rem"}>
                                    <Heading>Forma:</Heading>
                                    {outcomes.map(convertToIcon)}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Card>
            </Flex> :
            <Button onClick={() => {
                const attributes = cognitoUser.attributes
                DataStore.save(new User({
                    sub: attributes.sub,
                    name: attributes.given_name + " " + attributes.family_name,
                    email: attributes.email,
                    picture: attributes.picture,
                })).then(a => {
                        console.log(a);
                        setUser(a)
                    }
                ).catch(b => {
                    console.log(b)
                })
            }}
            >Dodaj me u statistiku</Button>
    )


}

export default ProfileSummaryComponent;
