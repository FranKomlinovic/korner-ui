import React, {useEffect, useState} from "react";
import {Button, Divider, Flex, Heading, Image, TextField, withAuthenticator} from "@aws-amplify/ui-react";
import {StorageManager} from "@aws-amplify/ui-react-storage";
import {checkIfOwner} from "../converters";
import {Auth, DataStore, Storage} from "aws-amplify";
import {Fields} from "../../models";
import KornerFieldShortWrapper from "../wrappers/kornerFieldShortWrapper";


const Profile = ({user}) => {
    const [isOwner, setIsOwner] = useState(false)
    const [fields, setFields] = useState([]);
    const {sub, given_name, family_name, picture} = user.getSignInUserSession().getIdToken().payload
    const [familyName, setFamilyName] = useState(family_name);
    const [givenName, setGivenName] = useState(given_name);
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

    const UploadComponent = () => (
        <StorageManager
            maxFileCount={1}
            processFile={({file, key}) => {
                const fileParts = key.split('.');
                const ext = fileParts.pop();
                return {
                    file,
                    // This will prepend a unix timestamp
                    // to ensure all files uploaded are unique
                    key: `${Date.now()}${fileParts.join('.')}.${ext}`,
                };
            }}
            maxFileSize={100000}
            displayText={{
                // some text are plain strings
                dropFilesText: 'Promijeni profilnu sliku',
                browseFilesText: 'Učitaj fotografiju',
                // others are functions that take an argument
                getFilesUploadedText(count) {
                    return `Fotografija učitana`;
                },
            }}
            onUploadSuccess={uploadProfilePicture}
            acceptedFileTypes={['image/*']}
            accessLevel="public"

        />
    )

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


    const ProfileDetails = () => (
        <Flex>
            <Flex direction={"column"}>
                <Image alt={"Profile photo"} width={"118px"} height={"118px"} objectFit={"cover"} borderRadius={400}
                       src={photo}/>
            </Flex>
            <Flex direction={"column"}>
                <TextField defaultValue={given_name}
                           onChange={a => setGivenName(a.currentTarget.value)}></TextField>
                <TextField defaultValue={family_name}
                           onChange={a => setFamilyName(a.currentTarget.value)}></TextField>
                <Button variation={"primary"} onClick={updateUserData}>Spremi</Button>
            </Flex>

        </Flex>
    )


    return (
        <Flex direction={"column"} alignItems={"center"}>
            <FieldOwnerComponent/>
            <Heading level={4}>Vaš profil:</Heading>
            <ProfileDetails/>
            <UploadComponent/>
        </Flex>
    );


}


export default withAuthenticator(Profile);

