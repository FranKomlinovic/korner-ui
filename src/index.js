import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Authenticator, ThemeProvider} from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
import {studioTheme} from "./ui-components";
import {BrowserRouter} from 'react-router-dom';
import {Amplify} from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import {Hub, I18n} from "aws-amplify/utils";
import {DataStore} from "aws-amplify/datastore";
import {User} from "./models";
import {fetchUserAttributes} from "aws-amplify/auth";

Amplify.configure(amplifyconfig);

I18n.setLanguage('hr');
I18n.putVocabulariesForLanguage('hr', {
    'Sign in': 'Prijava',
    'Sign In': 'Prijava',
    'Create Account': 'Napravi račun',
    'Password': 'Lozinka',
    'Confirm Password': 'Potvrdi lozinku',
    'Forgot your password?': 'Zaboravili ste lozinku?',
    'Enter your Email': 'Unesi email',
    'Enter your Password': 'Unesi lozinku',
    'Your passwords must match': 'Lozinke moraju biti jednake',
    'Please confirm your Password': 'Potvrdi lozinku',
    'Confirm your password': 'Potvrdi lozinku',
    'Given Name': 'Ime',
    'Family Name': 'Prezime',
    'Enter your Given Name': 'Unesi ime',
    'Enter your Family Name': 'Unesi prezime',
});

Hub.listen('auth', data => {
    if (data.payload.event === "signedIn") {
        fetchUserAttributes().then(a => {
            a && DataStore.query(User, a.sub).then(user => {
                !user &&
                DataStore.save(new User({
                    email: a.email,
                    cognitoID: a.sub,
                    name: a.given_name + " " + a.family_name,
                    picture: a.picture
                }))
            })
        })
    }
});

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
