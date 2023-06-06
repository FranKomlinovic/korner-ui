import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Authenticator, ThemeProvider} from "@aws-amplify/ui-react";
import {Amplify} from 'aws-amplify';
import {AWSIoTProvider} from '@aws-amplify/pubsub';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import {studioTheme} from "./ui-components";
import {BrowserRouter} from 'react-router-dom';

Amplify.configure(awsconfig);
Amplify.addPluggable(
    new AWSIoTProvider({
        aws_pubsub_region: 'eu-central-1',
        aws_pubsub_endpoint:
            'wss://a16qy0d29qbjsh-ats.iot.eu-central-1.amazonaws.com/mqtt'
    })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={studioTheme} colorMode={"light"}>
        <React.StrictMode>
            <BrowserRouter>
                <Authenticator.Provider>
                    <App/>
                </Authenticator.Provider>
            </BrowserRouter>
        </React.StrictMode>
</ThemeProvider>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
