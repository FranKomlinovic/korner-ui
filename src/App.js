import './App.css';

import {Amplify, Storage} from 'aws-amplify';

import {Button, Flex, Heading, Image, ScrollView, Text, useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./views/home";
import FieldById from "./views/fieldById";
import FieldView from "./views/fieldView";
import {FaCalendar, FaPlusCircle} from "react-icons/fa";
import Profile from "./views/profile";
import {useEffect, useState} from "react";
import AppointmentById from "./views/appointmentById";

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
        <Flex justifyContent={"start"} alignItems={"center"} marginTop={"0.5rem"}>
            <Image height={"40px"} alt={"Logo"} src={"/korner-logo.png"} onClick={goToHome}></Image>
            <Heading level={"3"} onClick={goToHome}>Korner</Heading>
        </Flex>)

    const routes = () => (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/fields/:fieldId" element={<FieldById/>}/>
            <Route path="/appointment/:appointmentId" element={<AppointmentById/>}/>
            <Route path="/fields" element={<FieldView/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )

    const menuStyle = {
        backgroundImage: "url("+ "/menu-background.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'contain'
    }

    const MyMenu = () => (
        <Flex style={menuStyle} backgroundColor={"transparent"} direction={"column"} width={"100%"} position={"sticky"}
              bottom={"-1px"}>

            <Flex marginTop={"25px"} backgroundColor={"transparent"} alignContent={"end"} justifyContent={"space-between"}
                  gap={"0.5rem"}>
                <Button onClick={() => navigate("/")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <FaCalendar color={"white"} size={"20px"}/><Text color={"white"}>Termini</Text>
                    </Flex>
                </Button>
                <Button onClick={() => navigate("/fields")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <FaPlusCircle color={"white"} size={"20px"}/><Text color={"white"}>Rezerviraj</Text>
                    </Flex>
                </Button>
                <Button onClick={() => navigate("/profile")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <Image src={image} onClick={goToProfile} borderRadius={400} objectFit={"cover"} width={"20px"}
                               height={"20px"}
                               color={"white"} alt={"Profilna slika"}/>
                        <Text color={"white"}>Profil</Text>
                    </Flex>
                </Button>
                {/*<Button disabled border={"none"}>*/}
                {/*    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>*/}
                {/*        <FaUsers size={"20px"}/><Text>Prijatelji</Text>*/}
                {/*    </Flex>*/}
                {/*</Button>*/}
            </Flex>

        </Flex>
    )

    const TopHeader = () => (
        <Flex marginInline={"10px"} justifyContent={"space-between"}>
            <LogoAndAppName/>
        </Flex>
    )


    return (
        <Flex >
            <Flex width={"100%"} direction={"column"} alignContent={"center"} justifyContent={"space-between"}>
                <TopHeader/>
                <ScrollView  marginTop={"5px"} marginBottom={"0px"} direction={"column"} justifyContent={"start"}>
                    {routes()}
                </ScrollView>
                {user && <MyMenu/>}
            </Flex>

        </Flex>
    )
}

export default App;
