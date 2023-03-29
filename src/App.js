import './App.css';

import {Amplify} from 'aws-amplify';

import {Flex, Heading, Menu, MenuItem, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./components/views/home";
import FieldById from "./components/views/fieldById";
import AppointmentView from "./components/views/appointmentView";
import CreateResponseWrapper from "./components/views/createResponseWrapper";

Amplify.configure(awsExports);

function App({signOut, user}) {
    const navigate = useNavigate();

    return (
        <Flex justifyContent={"flex-start"} direction={"column"}>
            <Flex direction={"row"} alignItems={"center"} margin={"10px"} justifyContent={"space-between"}>
                <Heading level={"4"}>Korner.hr</Heading>

                <Menu marginRight={"10px"}>
                    <MenuItem id="home" className="menu-item" onClick={() => navigate("/")}>Home</MenuItem>
                </Menu>
            </Flex>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/fields/:fieldId" element={<FieldById/>}/>
                <Route path="/appointment/:appointmentId" element={<AppointmentView/>}/>
                <Route path="/createResponse/:appointmentId" element={<CreateResponseWrapper/>}/>
            </Routes>
            <br/>
            <br/>
        </Flex>

    );
}

export default withAuthenticator(App);
