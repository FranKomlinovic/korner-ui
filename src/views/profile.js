import React, {useEffect, useState} from "react";
import {Button, Card, Flex, Heading, TextField, withAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify/datastore";

import {StorageImage} from '@aws-amplify/ui-react-storage';
import UploadComponent from "../components/UploadComponent";
import {User} from "../models";
import useGetCurrentUser from "../custom-hooks/useGetCurrentUser";
import LoaderComponent from "../components/loaderComponent";


const Profile = ({signOut}) => {
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const {userLoading, user} = useGetCurrentUser();

    useEffect(() => {
        setName(user?.name);
        user?.picture && setImage(user?.picture)
    }, [user])

    const uploadProfilePicture = (pic) => {
        DataStore.query(User, user?.cognitoID).then(usr => {
            DataStore.save(User.copyOf(usr, (item) => {
                item.picture = pic.key;
            })).then(a => {
                setImage(a.picture)
                setModalOpen(false)
            })
        })
    }

    const updateUserData = () => {
        DataStore.query(User, user?.cognitoID).then(usr => {
            DataStore.save(User.copyOf(usr, (item) => {
                item.name = name;
            })).then(a => {
                setName(a.name);
                setModalOpen(false)
            })
        })
    }

    const ProfileDetails = () => {
        return (
            userLoading ?
                <LoaderComponent/> :
                <Flex>
                    <Flex direction={"column"}>
                        <StorageImage imgKey={image} accessLevel={"public"} alt={"Profile photo"} width={"140px"}
                                      height={"140px"} objectFit={"cover"} borderRadius={400}/>
                        <Button size={"small"} variation={"link"} onClick={() => setModalOpen(true)}>Promijeni
                            sliku</Button>

                    </Flex>
                    <Flex direction={"column"}>
                        <TextField size={"small"} defaultValue={name}
                                   onChange={a => setName(a.currentTarget.value)} label={"Ime"}></TextField>
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

