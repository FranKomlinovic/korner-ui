import './App.css';

import {Amplify} from 'aws-amplify';

import {Flex, Heading, Image, Menu, MenuItem, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import {Route, Routes} from "react-router-dom";
import FieldListView from "./components/fieldListView";
import FieldDetailWrapper from "./components/fieldDetailWrapper";
import AppointmentView from "./components/appointmentView";
import CreateResponseWrapper from "./components/createResponseWrapper";

Amplify.configure(awsExports);

function App({signOut, user}) {
    return (
        <Flex  justifyContent={"flex-start"} direction={"column"}>
            <Flex direction={"row"} alignItems={"center"} margin={"10px"} justifyContent={"space-between"}>
                <Image height={"40px"} objectFit={"cover"} src={"korner-logo.png"}/>
                <Heading level={"3"}>Korner.hr</Heading>

                <Menu marginRight={"10px"}>
                    <MenuItem id="home" className="menu-item" href="/">Home</MenuItem>
                </Menu>
            </Flex>


            <Routes>
                <Route path="/" element={<FieldListView/>}/>
                <Route path="/fields/:id" element={<FieldDetailWrapper/>}/>
                <Route path="/appointment/:id" element={<AppointmentView/>}/>
                <Route path="/createResponse/:appointmentId" element={<CreateResponseWrapper/>}/>
            </Routes>
        </Flex>

    );
}

export default withAuthenticator(App);
