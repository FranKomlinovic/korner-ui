import './App.css';

import {Amplify, Storage} from 'aws-amplify';

import {Button, Divider, Flex, Heading, Image, ScrollView, Text, useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./components/views/home";
import FieldById from "./components/views/fieldById";
import AppointmentView from "./components/views/appointmentView";
import FieldView from "./components/views/fieldView";
import {FaPlus, FaRunning, FaSignInAlt, FaUser, FaUsers} from "react-icons/fa";
import FieldOwnerView from "./components/views/owner/fieldOwnerView";
import Profile from "./components/views/profile";
import {useEffect, useState} from "react";

Amplify.configure(awsExports);

function App() {
    const navigate = useNavigate();
    const [image, setImage] = useState("/no-picture.png");

    const {user} = useAuthenticator((context) => [
        context.user
    ]);

    useEffect(() => {
        let pic = user?.attributes.picture;
        if (pic) {
            Storage.get(pic).then(a => {
                setImage(a);
            }).catch(() => {
                setImage("/no-picture.png");
            })
        }
    }, [user])
    const goToHome = () => navigate("/")
    const goToProfile = () => navigate("/profile")

    const LogoAndAppName = () => (
        <Flex justifyContent={"start"} alignItems={"center"}>
            <Image height={"60px"} alt={"Logo"} src={"/korner-logo.png"} onClick={goToHome}></Image>
            <Heading color={"#224226"} level={"3"} onClick={goToHome}>Korner.hr</Heading>
        </Flex>)

    const SignInSignOut = () => {
        if (user) {
            return (
                <Flex alignContent={"center"} alignSelf={"center"} gap={"0.2rem"} justifyContent={"end"}>
                    <Image src={image} onClick={goToProfile} borderRadius={400} objectFit={"cover"} width={"60px"}
                           height={"60px"}
                           color={"darkred"} alt={"Profilna slika"}/>
                </Flex>
            )
        } else {
            return (
                <Flex alignContent={"center"} alignSelf={"center"} gap={"0.2rem"} justifyContent={"end"}>
                    <Heading alignSelf={"center"}><FaSignInAlt size={"30px"}/></Heading>
                </Flex>
            )
        }
    }
    const routes = () => (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/fields/:fieldId" element={<FieldById/>}/>
            <Route path="/appointment/:appointmentId" element={<AppointmentView/>}/>
            <Route path="/fields" element={<FieldView/>}/>
            <Route path="/owner/fields" element={<FieldOwnerView/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )

    const MyMenu = () => (
        <Flex gap={"5px"} backgroundColor={"white"} direction={"column"} position={"sticky"} bottom={"5px"} >
            <Divider size={"small"}/>
            <Flex marginTop={"0px"} justifyContent={"space-between"}
                  gap={"0.5rem"}>
                <Button onClick={() => navigate("/profile")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <FaUser size={"20px"}/><Text>Profil</Text>
                    </Flex>
                </Button>
                <Button onClick={() => navigate("/")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <FaRunning size={"20px"}/><Text>Termini</Text>
                    </Flex>
                </Button>
                <Button onClick={() => navigate("/fields")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <FaPlus size={"20px"}/><Text>Rezerviraj</Text>
                    </Flex>
                </Button>
                <Button disabled border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <FaUsers size={"20px"}/><Text>Prijatelji</Text>
                    </Flex>
                </Button>
            </Flex>

        </Flex>
    )

    const TopHeader = () => (
        <Flex justifyContent={"space-between"}>
            <LogoAndAppName/>
            <SignInSignOut/>
        </Flex>
    )

    return (
        <Flex margin={"5px"} direction={"column"} justifyContent={"space-between"}>
            <TopHeader/>
            <ScrollView height={"100vh"} direction={"column"} justifyContent={"start"}>
                {routes()}
            </ScrollView>
            {user && <MyMenu/>}
        </Flex>
    )
}

export default App;
