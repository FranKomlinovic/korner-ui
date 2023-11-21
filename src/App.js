import './App.css';


import {Flex, ScrollView} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Route, Routes} from "react-router-dom";
import Home from "./views/home";
import FieldById from "./views/fieldById";
import FieldView from "./views/fieldView";
import Profile from "./views/profile";
import AppointmentById from "./views/appointmentById";
import LandingPage from "./views/landing-page";
import PlayedAppointments from "./views/playedAppointments";
import RecurringById from "./views/recurringById";
import {AlertProvider} from "./context/alertContext";
import AlertComponent from "./components/alertComponent";
import HeaderComponent from "./components/headerComponent";
import {useEffect} from "react";
import runOneSignal from "./custom-hooks/runOneSignal";
import useGetCurrentUser from "./custom-hooks/useGetCurrentUser";

function App() {
    const {user} = useGetCurrentUser();

    useEffect(() => {
        user && runOneSignal(user);
    }, [user])

    const routes = () => (
        <Routes>
            <Route path="/" element={<LandingPage isHelp={false}/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/fields/:fieldId" element={<FieldById/>}/>
            <Route path="/appointment/:appointmentId" element={<AppointmentById/>}/>
            <Route path="/recurring/:recurringId" element={<RecurringById/>}/>
            <Route path="/fields" element={<FieldView/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/played" element={<PlayedAppointments/>}/>
            <Route path="/help" element={<LandingPage isHelp={true}/>}/>
        </Routes>
    )

    const bg = {
        backgroundImage: "url(\"/app-bg.png\")",
        backgroundSize: "contain",
        backgroundPosition: "center",
    }

    return (
        <Flex style={bg} minHeight={"100vh"} gap={"0px"} maxWidth={"500px"} direction={"column"}
              alignContent={"center"}>
            <AlertProvider>
                <AlertComponent/>
                <HeaderComponent user={user}/>
                <ScrollView paddingBottom={"1rem"} direction={"column"}>
                    {routes()}
                </ScrollView>
            </AlertProvider>
        </Flex>

    )
}

export default App;
