import React, {useEffect, useState} from "react";
import {Button, FileUploader, Flex, Heading, Image, TextField, withAuthenticator} from "@aws-amplify/ui-react";
import {checkIfOwner} from "../converters";
import {Auth, DataStore, Storage} from "aws-amplify";
import {Fields} from "../../models";
import KornerFieldShortWrapper from "../wrappers/kornerFieldShortWrapper";


const Profile = ({user}) => {
    const [isOwner, setIsOwner] = useState(false)
    const [fields, setFields] = useState();
    const [photo, setPhoto] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        setIsOwner(checkIfOwner(user));
        let payload = user.getSignInUserSession().getIdToken().payload;
        Storage.get(payload.picture).then(b => {
            setPhoto(b);
        }).catch((c) => {
            setPhoto("https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg")
        })
        setName(payload.given_name);
        setLastName(payload.family_name);
        setEmail(payload.email);
    }, [user]);

    useEffect(() => {
        if (isOwner) {
            DataStore.query(Fields, a =>
                a.ownerID.eq(user.attributes.sub)
            ).then(a => {
                setFields(a);
            })
        }
    }, [isOwner, user]);

    const allFields = () => {
        return fields.map(a => <Flex key={a.id}><KornerFieldShortWrapper fields={a}/></Flex>);
    };

    function uploadProfilePicture(picture) {
        Auth.updateUserAttributes(user, {
            'picture': picture.key
        }).then(a => {
            user = a;
        });
    }

    function updateUserData() {
        Auth.updateUserAttributes(user, {
            'email': email,
            'given_name': name,
            'family_name': lastName
        }).then(a => {
            user = a;
        });
    }


    return (
        <Flex direction={"column"} alignItems={"center"}>
            {fields && <Heading level={4}>Vaši tereni:</Heading>}
            {fields && allFields()}
            <Heading level={4}>Vaš profil:</Heading>
            {/*<KornerEditProfile photo={photo}/>*/}
            <Image width={"250px"} height={"250px"} objectFit={"cover"} borderRadius={400} src={photo}/>
            <FileUploader
                variation={"button"}
                shouldAutoProceed={true}
                onSuccess={(a) => uploadProfilePicture(a)}
                hasMultipleFiles={false}
                acceptedFileTypes={['image/*']}
                accessLevel="public"

            />
            <TextField label={"Ime"} defaultValue={name} onChange={a => setName(a.currentTarget.value)}></TextField>
            <TextField label={"Prezime"} defaultValue={lastName}
                       onChange={a => setLastName(a.currentTarget.value)}></TextField>
            <Button variation={"primary"} onClick={() => updateUserData()}>Spremi</Button>
        </Flex>
    );


}


export default withAuthenticator(Profile);

