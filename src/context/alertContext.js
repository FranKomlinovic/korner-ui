import {createContext, useState} from "react";

const AlertContext = createContext({
    alert: null,
    alertText: null,
    success: () => {},
    error: () => {},
    warning: () => {},
});

const STATES = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning'
};

const ALERT_TIMEOUT = 3000;

const AlertProvider = (props) => {
    const [alert, setAlert] = useState(null);
    const [alertText, setAlertText] = useState(null);

    const success = (text) => {
        window.scroll(0, 0);
        setAlertText(text);
        setAlert(STATES.SUCCESS);
        setTimeout(clear, ALERT_TIMEOUT)

    };
    const error = (text) => {
        window.scroll(0, 0);
        setAlertText(text);
        setAlert(STATES.ERROR);
        setTimeout(clear, ALERT_TIMEOUT)
    };
    const warning = (text) => {
        window.scroll(0, 0);
        setAlertText(text);
        setAlert(STATES.WARNING);
        setTimeout(clear, ALERT_TIMEOUT)
    };
    const clear = () => {
        setAlertText(null);
        setAlert(null);
    };
    return (
        <AlertContext.Provider
            value={{
                success, error, warning, clear, alert, alertText,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export { AlertProvider };
export default AlertContext;
