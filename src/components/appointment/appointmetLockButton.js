import {SwitchField} from "@aws-amplify/ui-react";
import React, {useState} from "react";
import {DataStore} from 'aws-amplify/datastore';

import {Appointment} from "../../models";

const AppointmentLockButton = ({appointment}) => {
    const [isLocked, setIsLocked] = useState(appointment.locked);

    return (<SwitchField
        label="Onemogući nove odgovore"
        labelPosition={"end"}
        isChecked={isLocked}
        variation={"quiet"}
        onChange={(a) => {
            DataStore.save(Appointment.copyOf(appointment, (item) => {
                item.locked = a.target.checked;
            })).then(b => {
                setIsLocked(b.locked);
            })
        }}
    />)
}

export default AppointmentLockButton
