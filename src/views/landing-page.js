import React from "react";
import {Button, Card, Expander, ExpanderItem, Flex, Heading, Image, Text} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import {List, ListItem} from "@mui/material";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <Flex marginInline={"1rem"} direction={"column"}>
            <Flex direction={"column"} alignItems={"center"}>
                <Heading level={2}>Jednostavno rezerviraj sportske terene</Heading>
            </Flex>
            <Flex direction={"column"} alignItems={"center"}>
                <Button variation={"primary"} onClick={() => navigate('/fields')}>Prijava/Registracija</Button>
            </Flex>
            <Card marginInline={"1rem"} backgroundColor={"transparent"} variation={"elevated"}>
                <Flex>
                    <Image alignSelf={"center"} alt={"Mjesto"} width={"40%"} height={"auto"} src={"/field.jpg"}/>
                    <Flex direction={"column"}>
                        <Heading level={4}>Pronađi mjesto derbija</Heading>
                        <Text>Pretraži sve terene na korner platformi</Text>
                    </Flex>
                </Flex>
            </Card>
            <Card marginInline={"1rem"} backgroundColor={"transparent"} variation={"elevated"}>
                <Flex>
                    <Flex direction={"column"}>
                        <Heading level={4}>Odaberi vrijeme tekme</Heading>
                        <Text>Pregledaj slobodne termine i izaberi vrijeme utakmice</Text>
                    </Flex>
                    <Image alignSelf={"center"} alt={"Vrijeme"} width={"40%"} height={"auto"} src={"/time.jpg"}/>
                </Flex>
            </Card>
            <Card marginInline={"1rem"} backgroundColor={"transparent"} variation={"elevated"}>
                <Flex>
                    <Image alignSelf={"center"} alt={"Vrijeme"} width={"40%"} height={"auto"} src={"/team.jpg"}/>
                    <Flex direction={"column"}>
                        <Heading level={4}>Skupi ekipu</Heading>
                        <Text>Pozovi prijatelje i prati tko će sudijelovati na terminu</Text>
                    </Flex>
                </Flex>

            </Card>
            <Card marginInline={"1rem"} backgroundColor={"transparent"} variation={"elevated"}>
                <Flex>
                    <Flex direction={"column"}>
                        <Heading level={4}>Rezerviraj termin</Heading>
                        <Text>Kada se skupi dovoljno igrača, rezerviraj termin</Text>
                    </Flex>
                    <Image alignSelf={"center"} alt={"Vrijeme"} width={"40%"} height={"auto"} src={"/reserve.jpg"}/>
                </Flex>
            </Card>
            <Card marginInline={"1rem"} backgroundColor={"transparent"} variation={"elevated"}>
                <Flex>
                    <Image alignSelf={"center"} alt={"Vrijeme"} width={"40%"} height={"auto"} src={"/played.jpg"}/>
                    <Flex direction={"column"}>
                        <Heading level={4}>Igraj</Heading>
                        <Text>Jedino je preostalo odigrati termin</Text>
                    </Flex>
                </Flex>
            </Card>

            <Heading margin={"1rem"} level={3}>Često postavljena pitanja</Heading>
            <Expander backgroundColor={"red"} type="single">
                <ExpanderItem title="Što je korner?" value="whatIsCorner">
                    <Text>
                        Korner je platforma za rezervaciju sportskih termina.
                    </Text>
                    <Text>
                        Glavna svrha mu je organizacija amaterskih sportskih
                        termina koja uključuje rezervaciju terena i okupljanje ekipe koja će taj termin igrati
                    </Text>
                </ExpanderItem>
                <ExpanderItem title="Naplaćuje li se korištenje kornera?" value="price">
                    <Text>
                        Ne. Platforma je za korisnike potpuno besplatna.
                    </Text>
                </ExpanderItem>
                <ExpanderItem title="Koji tereni su dostupni?" value="fields">
                    <Text>
                        Trenutno je dostupno nekoliko terena, ako želite da i teren na kojem ste do sada igrali bude na
                        platformi, slobodno uputite vlasnika da se registrira u korner
                    </Text>
                </ExpanderItem>
                <ExpanderItem title="Mogu li koristiti korner bez korisničkog računa?" value="withoutAccount">
                    <Text>
                        Da, ali samo za potvrđivanje svog dolaska na termin. Za rezervaciju termina potreban je
                        korisnički račun.
                    </Text>
                    <Text>
                        Svakako preporučamo da napravite korisnički račun kako biste mogli imati evidenciju svih
                        utakmica koje ste odigrali, ali i sami organizirati termin
                    </Text>
                </ExpanderItem>
                <ExpanderItem title="Kako rezervirati termin?" value="reserve">
                    <Text> Kako biste rezervirali termin morate imati račun na korner platformi, podsjećamo da je korner
                        potpuno besplatan.
                    </Text>

                    <List>
                        <Text>
                            Rezervacija termina ide kroz nekoliko kratkih koraka:
                        </Text>
                        <ListItem>Odaberite teren na kojem želite igrati</ListItem>
                        <ListItem>Izaberite datum i željeno trajanje te pritisnite na jedan od ponuđenih
                            termina</ListItem>
                        <ListItem>Kopirajte poveznicu klikom na gumb i pošaljite ju svojim prijateljima</ListItem>
                        <ListItem>Pričekajte odgovore svojih prijatelja i kada imate dovoljno igrača pritisnite gumb
                            rezerviraj</ListItem>
                    </List>
                </ExpanderItem>
                <ExpanderItem title="Kako potvrditi dolazak na termin?" value="accept">
                    <Text>
                        Dolazak na termin potvrđujete klikom na link koji vam je poslao organizator termina.
                    </Text>
                    <Text>
                        Za potvdu termina ne morate imati korisnički račun. Usprkos tome, savjetujemo vam da ga
                        napravite kako biste mogli promijeniti odluku o dolasku na termin te pratiti svoje odigrane
                        termine
                    </Text>
                </ExpanderItem>
            </Expander>
        </Flex>)
}

export default LandingPage;
