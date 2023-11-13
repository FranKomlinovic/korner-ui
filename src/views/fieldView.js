import React, {useEffect, useState} from "react";
import {Collection, Flex, SelectField, TextField, withAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Fields} from "../models";
import FigmaField from "../figma-components/FigmaField";

const FieldView = () => {
    const [fields, setFields] = useState()
    const [filter, setFilter] = useState()
    const [sport, setSport] = useState("FUTSAL")

    // Gets field by id
    useEffect(() => {
        filter ?
            DataStore.query(Fields, (c) =>
                c.and(c => [
                    c.sports.contains(sport),
                    c.or((d) => [
                        d.name.contains(filter),
                        d.address.contains(filter)
                    ])
                ])).then((a) => {
                setFields(a);
            }) :
            DataStore.query(Fields, (c) => c.sports.contains(sport)).then((a) => {
                setFields(a);
            })
    }, [filter, sport]);

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Flex justifyContent={"stretch"} alignItems={"center"}>
                <SelectField
                    size={"small"}
                    label="Sport"
                    onChange={(a) => setSport(a.currentTarget.value)}
                    value={sport}
                >
                    <option value="FUTSAL">Futsal</option>
                    <option value="PADEL">Padel</option>
                    <option value="CAGEBALL">Cageball</option>
                </SelectField>

                <TextField size={"small"} label={"Filter"} placeholder={"Pretraži..."}
                           onChange={(a) => setFilter(a.currentTarget.value)}/>
            </Flex>
            <Collection items={fields}>
                {(item) => (
                    <Flex key={item.id}>
                        <FigmaField field={item}/>
                    </Flex>
                )}
            </Collection>
        </Flex>
    );
};

export default withAuthenticator(FieldView);
