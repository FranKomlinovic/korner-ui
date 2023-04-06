import './App.css';

import {Amplify, Auth} from 'aws-amplify';

import {Authenticator, Button, Divider, Flex, Heading, Image, Text} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./components/views/home";
import FieldById from "./components/views/fieldById";
import AppointmentView from "./components/views/appointmentView";
import FieldView from "./components/views/fieldView";
import {FaPlus, FaRunning, FaSignInAlt, FaSignOutAlt, FaUser, FaUsers} from "react-icons/fa";
import {useEffect, useState} from "react";
import FieldOwnerView from "./components/views/owner/fieldOwnerView";
import Profile from "./components/views/profile";

Amplify.configure(awsExports);

function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [openSignIn, setOpenSignIn] = useState(false);

    function signOut() {
        Auth.signOut().then(a => {
            window.location.reload()
        }).catch(a => {
        });
    }

    function signIn() {
        setOpenSignIn(true);
    }

    useEffect(() => {
        Auth.currentSession().then(a => {
            setUser(a.getIdToken().payload);
        }).catch(a => {
            setUser(null)
        });

    }, []);

    return (
        <Flex margin={"5px"} direction={"column"} justifyContent={"space-between"}>
            <Flex justifyContent={"space-between"}>
                <Flex justifyContent={"start"} alignItems={"center"}>
                    <Image height={"40px"} alt={"/images/logo.png"} src={"/korner-logo.png"}></Image>
                    <Heading color={"#224226"} level={"4"} onClick={() => navigate("/")}>Korner.hr</Heading>
                </Flex>
                {user && <Flex alignContent={"center"} alignSelf={"center"} gap={"0.2rem"} justifyContent={"end"}>
                    <Heading
                        alignSelf={"center"}>{user.given_name + " " + user.family_name}</Heading>
                    <FaSignOutAlt onClick={() => signOut()} size={"30px"} color={"darkred"}/>
                </Flex>}

                {!user && <Flex alignContent={"center"} alignSelf={"center"} gap={"0.2rem"} justifyContent={"end"}>
                    <Heading alignSelf={"center"}><FaSignInAlt onClick={() => signIn()}
                                                               size={"30px"}/></Heading></Flex>}

            </Flex>
            {openSignIn && <Authenticator/>}

            <Divider size={"large"}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/fields/:fieldId" element={<FieldById/>}/>
                <Route path="/appointment/:appointmentId" element={<AppointmentView/>}/>
                <Route path="/fields" element={<FieldView/>}/>
                <Route path="/owner/fields" element={<FieldOwnerView/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            {user &&
                <Flex backgroundColor={"white"} position={"sticky"} bottom={"0px"} justifyContent={"space-between"}
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
                    <Button disabled={true} border={"none"}>
                        <Flex alignItems={"center"} gap={"0rem"} direction={"column"}>
                            <FaUsers size={"20px"}/><Text>Prijatelji</Text>
                        </Flex>
                    </Button>
                </Flex>}
        </Flex>);
}

export default App;
