import './App.css';

import {Amplify} from 'aws-amplify';

import {Menu, MenuItem, withAuthenticator} from '@aws-amplify/ui-react';
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
        <>
            <Menu>
                <MenuItem id="home" className="menu-item" href="/">Home</MenuItem>
                <MenuItem id="about" className="menu-item" href="/about">About</MenuItem>
                <MenuItem id="contact" className="menu-item" href="/contact">Contact</MenuItem>
            </Menu>
            <Routes>
                <Route path="/" element={<FieldListView/>}/>
                <Route path="/fields/:id" element={<FieldDetailWrapper/>}/>
                <Route path="/appointment/:id" element={<AppointmentView/>}/>
                <Route path="/createResponse/:appointmentId" element={<CreateResponseWrapper/>}/>
            </Routes>
        </>

    );
}

export default withAuthenticator(App);
