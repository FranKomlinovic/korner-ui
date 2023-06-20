import React, {useContext} from 'react';
import {Alert, View} from "@aws-amplify/ui-react";
import AlertContext from "../context/alertContext";

const AlertComponent = () => {
    const alertCtx = useContext(AlertContext);
    return (
        alertCtx.alert !== null && (
            <View style={{position: "relative",  zIndex: 1000}}>
                <View style={{position: "absolute", top: "1rem", right: "1rem"}}>
                    <Alert
                        variation={alertCtx.alert}
                        hasIcon={true}
                    >
                        {alertCtx.alertText}
                    </Alert>
                </View>
            </View>
        )
    );
};
export default AlertComponent;
