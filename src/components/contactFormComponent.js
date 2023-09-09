import {Button, Card, Flex, Heading, TextAreaField, TextField} from "@aws-amplify/ui-react";
import * as emailjs from "emailjs-com";
import React, {useContext, useState} from "react";
import AlertContext from "../context/alertContext";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const alertContext = useContext(AlertContext);

    const SERVICE_ID = process.env.REACT_APP_MAIL_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_MAIL_TEMPLATE_ID
    const USER_PUBLIC_KEY = process.env.REACT_APP_MAIL_USER_PUBLIC_KEY

    const clearFields = () => {
        setName("");
        setMail("");
        setMessage("");
        setLoading(false)
    }

    const validateMail = () => {
        if (/\S+@\S+\.\S+/.test(mail)) {
            return true;
        }
        alertContext.error("Neispravan mail")
        setLoading(false);
        return false;
    }


    const handleOnSubmit = () => {
        setLoading(true);
        const params = {
            from_name: name,
            message: message,
            reply_to: mail
        };
        validateMail() && emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_PUBLIC_KEY)
            .then(function (response) {
                alertContext.success("Hvala na Vašoj poruci, odgovoriti ćemo u najskorijem vremenu na vaš E-Mail")
                clearFields();
            }, function (error) {
                alertContext.error("Dogodila se greška")
                setLoading(false)
            });
    };

    return (
        <Card>
            <Flex direction={"column"} alignItems={"center"}>
                <Heading level={4}>Imate pitanja?</Heading>
                <Heading>Kontaktirajte nas</Heading>
                <TextField isRequired
                           placeholder="Pero Perić"
                           label="Ime i prezime"
                           onChange={(a) => setName(a.currentTarget.value)}
                           value={name}

                />
                <TextField isRequired={true}
                           placeholder="pero.peric@mail.com"
                           label="E-Mail"
                           onChange={(a) => setMail(a.currentTarget.value)}
                           value={mail}
                           errorMessage={"Greška"}
                />
                <TextAreaField isRequired
                               placeholder="Vaša poruka"
                               label="Poruka"
                               onChange={(a) => setMessage(a.currentTarget.value)}
                               value={message}
                />
                <Button isLoading={loading} variation={"primary"} isDisabled={!(message && mail && name)}
                        onClick={handleOnSubmit}>Pošalji
                    upit</Button>

            </Flex>
        </Card>

    )
}
export default ContactForm;
