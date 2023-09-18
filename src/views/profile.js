import React, {useEffect, useState} from "react";
import {Button, Card, Flex, Heading, Image, TextField, withAuthenticator} from "@aws-amplify/ui-react";
import {Auth, Storage} from "aws-amplify";
import UploadComponent from "../components/UploadComponent";


const Profile = ({user, signOut}) => {
    const {given_name, family_name, picture} = user.getSignInUserSession().getIdToken().payload
    const [familyName, setFamilyName] = useState(family_name);
    const [givenName, setGivenName] = useState(given_name);
    const [modalOpen, setModalOpen] = useState(false);
    const [photo, setPhoto] = useState("/no-picture.png");

    //Gets user picture
    useEffect(() => {
        Storage.get(picture).then(b => {
            setPhoto(b);
        }).catch(() => {
            setPhoto("/no-picture.png")
        })
    }, [picture]);

    const uploadProfilePicture = (pic) => {
        Auth.updateUserAttributes(user, {
            'picture': pic.key
        }).then(a => {
            setModalOpen(false)
            user = a;
        });
    }

    const updateUserData = () => {
        Auth.updateUserAttributes(user, {
            'given_name': givenName,
            'family_name': familyName
        }).then(a => {
            user = a;
        });
    }


    const changeFirstName = (a) => {
        setGivenName(a.currentTarget.value)
    }

    const changeLastName = (a) => {
        setFamilyName(a.currentTarget.value)
    }

    const ProfileDetails = () => {
        return (
            <Flex>
                <Flex direction={"column"}>
                    <Image alt={"Profile photo"} width={"140px"} height={"140px"} objectFit={"cover"} borderRadius={400}
                           src={photo}/>
                    <Button size={"small"} variation={"link"} onClick={() => setModalOpen(true)}>Promijeni
                        sliku</Button>

                </Flex>
                <Flex direction={"column"}>
                    <TextField size={"small"} defaultValue={givenName}
                               onChange={changeFirstName} label={"Ime"}></TextField>
                    <TextField size={"small"} defaultValue={familyName}
                               onChange={changeLastName} label={"Prezime"}></TextField>
                    <Button variation={"primary"} size={"small"} onClick={updateUserData}>Spremi</Button>
                </Flex>

            </Flex>
        )
    }


    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Card variation={"elevated"} marginInline={"1rem"}>
                <Flex direction={"column"} alignItems={"center"}>
                    <Heading level={4}>Vaš profil:</Heading>
                    {ProfileDetails()}
                    <UploadComponent open={modalOpen} uploadSuccessFunction={uploadProfilePicture}
                                     handleClose={() => setModalOpen(false)} text={"Promijeni sliku profila"}/>
                    <Button variation={"destructive"} onClick={() => signOut()}>Odjavi se</Button>
                </Flex>
            </Card>
        </Flex>
    );


}


export default withAuthenticator(Profile);

