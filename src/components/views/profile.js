import React, {useEffect, useState} from "react";
import {Button, Divider, Flex, Heading, Image, TextField, withAuthenticator} from "@aws-amplify/ui-react";
import {checkIfOwner} from "../converters";
import {Auth, DataStore, Storage} from "aws-amplify";
import {Fields} from "../../models";
import KornerFieldShortWrapper from "../wrappers/kornerFieldShortWrapper";
import UploadComponent from "../components/UploadComponent";


const Profile = ({user}) => {
    const [isOwner, setIsOwner] = useState(false)
    const [fields, setFields] = useState([]);
    const {sub, given_name, family_name, picture} = user.getSignInUserSession().getIdToken().payload
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


    //Checks if user is in owner group
    useEffect(() => {
        setIsOwner(checkIfOwner(user));
    }, [user]);

    //Gets owners fields
    useEffect(() => {

        if (isOwner) {
            DataStore.query(Fields, a =>
                a.ownerID.eq(sub)
            ).then(a => {
                setFields(a);
            })
        }
    }, [isOwner, sub]);

    const AllFields = () => {
        return fields.map(a => <Flex key={a.id}><KornerFieldShortWrapper fields={a}/></Flex>);
    };

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

    const FieldOwnerComponent = () => {
        if (fields) {
            return (
                <Flex direction={"column"} alignItems={"center"}>
                    <Heading level={4}>Vaši tereni:</Heading>
                    <AllFields/>
                    <Divider size={"large"}/>
                </Flex>
            )
        }

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
                    <Button variation={"link"} onClick={() => setModalOpen(true)}>Promijeni sliku</Button>

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
            {FieldOwnerComponent()}
            <Heading level={4}>Vaš profil:</Heading>
            {ProfileDetails()}
            <UploadComponent open={modalOpen} uploadSuccessFunction={uploadProfilePicture}
                             handleClose={() => setModalOpen(false)} text={"Promijeni sliku profila"}/>
        </Flex>
    );


}


export default withAuthenticator(Profile);

