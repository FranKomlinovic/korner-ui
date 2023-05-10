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
import {AddToHomeScreen} from "react-pwa-add-to-homescreen";

Amplify.configure(awsExports);

function App() {
    const navigate = useNavigate();
    const [image, setImage] = useState("/no-picture.png");

    const {user} = useAuthenticator((context) => [
        context.user
    ]);

    useEffect(() => {
        if (!user?.attributes) {
            return;
        }
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
        <Heading level={"3"} color={"green.90"} fontWeight={"bold"} fontStyle={"italic"} onClick={goToHome}>
            k<Image alignSelf={"center"} height={"1.1rem"} alt={"O"} src={"/korner-logo.png"}
                    onClick={goToHome}></Image>rner
        </Heading>)

    const routes = () => (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/fields/:fieldId" element={<FieldById/>}/>
            <Route path="/appointment/:appointmentId" element={<AppointmentById/>}/>
            <Route path="/fields" element={<FieldView/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )

    const MyMenu = () => (
        <Flex marginTop={"auto"} backgroundColor={"green.90"} direction={"column"}>

            <Flex marginTop={"0px"} justifyContent={"space-between"}
                  gap={"0.5rem"}>
                <Button onClick={() => navigate("/")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <FaCalendar color={"white"} size={"20px"}/><Text fontSize={"small"}
                                                                         color={"white"}>Termini</Text>
                    </Flex>
                </Button>
                <Button onClick={() => navigate("/fields")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <FaPlusCircle color={"white"} size={"20px"}/><Text fontSize={"small"}
                                                                           color={"white"}>Rezerviraj</Text>
                    </Flex>
                </Button>
                <Button onClick={() => navigate("/profile")} border={"none"}>
                    <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                        <Image src={image} onClick={goToProfile} borderRadius={400} objectFit={"cover"} width={"20px"}
                               height={"20px"}
                               color={"white"} alt={"Profilna slika"}/>
                        <Text fontSize={"small"} color={"white"}>Profil</Text>
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
        <Flex marginInline={"1rem"} justifyContent={"space-between"}>
            <LogoAndAppName/>
        </Flex>
    )


    return (
        <Flex height={"100vh"} gap={"0px"} maxWidth={"500px"} direction={"column"} alignContent={"center"}>
            <AddToHomeScreen
                translate={{chromiumInstall: "Preuzmi KornerHR aplikaciju na svoj mobitel", buttonInstall: "Preuzmi"}}
                delayNotify={200} skipFirstVisit={false} cookie={{name: "korner", expireDays: 1}}/>
            <TopHeader/>
            <ScrollView marginTop={"0rem"} marginBottom={"0px"} direction={"column"}>
                {routes()}
            </ScrollView>
            {user && <MyMenu/>}
        </Flex>

    )
}

export default App;
