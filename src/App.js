import './App.css';

import {Amplify, Storage} from 'aws-amplify';

import {Flex, Heading, Image, Menu, MenuItem, ScrollView, useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./views/home";
import FieldById from "./views/fieldById";
import FieldView from "./views/fieldView";
import Profile from "./views/profile";
import {useEffect, useState} from "react";
import AppointmentById from "./views/appointmentById";
import {AddToHomeScreen} from "react-pwa-add-to-homescreen";
import {FaCalendar, FaPlusCircle} from "react-icons/fa";

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
        <Heading level={"2"} color={"brand.primary.100"} fontWeight={"bold"} fontStyle={"italic"} onClick={goToHome}>
            k<Image alignSelf={"center"} height={"1.4rem"} alt={"O"} src={"/korner-logo.png"}
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
        <Flex marginBlock={"0.5rem"}>
            <Menu marginRight={"1rem"} border={"none"} padding={"0.1rem"}>
                <MenuItem onClick={() => navigate("/")}>
                    <Flex alignItems={"center"}>
                        <FaCalendar size={"1.5rem"}/><Heading>Moji termini</Heading>
                    </Flex>
                </MenuItem>
                <MenuItem onClick={() => navigate("/fields")}>
                    <Flex alignItems={"center"}>
                        <FaPlusCircle size={"1.5rem"}/><Heading>Rezerviraj</Heading>
                    </Flex>
                </MenuItem>
                <MenuItem onClick={goToProfile}>
                    <Flex alignItems={"center"}>
                        <Image src={image} borderRadius={400} objectFit={"cover"} width={"1.5rem"}
                               height={"1.5rem"} alt={"Profilna slika"}/><Heading>Profil</Heading>
                    </Flex>
                </MenuItem>

            </Menu>
        </Flex>
    )

    const TopHeader = () => (
        <Flex marginInline={"1rem"} justifyContent={"space-between"}>
            <LogoAndAppName/>
            {user && <MyMenu/>}
        </Flex>
    )

    const translate = {
        headline: "Preuzmi Korner na svoj uređaj",
        bottomline: "Za lakše upravljanje terminima",
        safariTapShare: "Pritisni \"Share\"",
        safariAddHomeScreen: "Odaberi \"Add to Home Screen\"",
        chromiumAddHomeScreen: "Pritisni \"Add to Home Screen\" u svom pregledniku",
        chromiumInstall: "Ikona aplikacije biti će prikazana na zaslonu mobitela",
        buttonInstall: "Preuzmi",
    }

    const bg = {
        backgroundImage: "url(\"/app-bg.png\")",
        backgroundSize: "contain",
        backgroundPosition: "center",
    }

    return (
        <Flex style={bg} height={"100vh"} gap={"0px"} maxWidth={"500px"} direction={"column"} alignContent={"center"}>
            <AddToHomeScreen
                translate={translate}
                delayNotify={200} skipFirstVisit={false} cookie={{name: "korner", expireDays: 1}}/>
            <TopHeader/>
            <ScrollView paddingBottom={"1rem"} direction={"column"}>
                {routes()}
            </ScrollView>
        </Flex>

    )
}

export default App;
