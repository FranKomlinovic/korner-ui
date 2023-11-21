import React from "react";
import {Accordion, Button, Card, Flex, Heading, Image, Tabs, Text} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import {List, ListItem} from "@mui/material";
import ContactForm from "../components/contactFormComponent";

const LandingPage = ({isHelp}) => {
    const navigate = useNavigate();

    const userCardList = [
        {
            inverted: false,
            alt: "field",
            img: "/field.jpg",
            heading: "Pronađi mjesto derbija",
            text: "Pretraži sve terene na Korner platformi"
        },
        {
            inverted: true,
            alt: "time",
            img: "/time.jpg",
            heading: "Odaberi vrijeme tekme",
            text: "Pregledaj slobodne termine i izaberi vrijeme utakmice"
        },
        {
            inverted: false,
            alt: "team",
            img: "/team.jpg",
            heading: "Skupi ekipu",
            text: "Pozovi prijatelje i prati tko će sudijelovati na terminu"
        },
        {
            inverted: true,
            alt: "reserve",
            img: "/reserve.jpg",
            heading: "Rezerviraj termin",
            text: "Kada se skupi dovoljno igrača, rezerviraj termin"
        },
        {
            inverted: false,
            alt: "play",
            img: "/played.jpg",
            heading: "Igraj",
            text: "Jedino je preostalo odigrati termin"
        },
    ]

    const ownerCardList = [
        {
            inverted: false,
            alt: "team",
            img: "/owner.png",
            heading: "Zaboravite bilježnicu",
            text: "Korner je sustav za jednostavno vođenje sportskih terena"
        },
        {
            inverted: true,
            alt: "reserve",
            img: "/reserve.jpg",
            heading: "Korner radi umjesto Vas",
            text: "Korisnici mogu sami rezervirati termine kroz aplikaciju, bez da Vas zovu ili šalju poruke"
        },
        {
            inverted: false,
            alt: "play",
            img: "/field.jpg",
            heading: "Budite dio Korner svijeta",
            text: "Postanite dio platforme i dovedite nove ekipe na svoj teren"
        },
        {
            inverted: true,
            alt: "play",
            img: "/korner-logo.png",
            heading: "Slušamo Vas",
            text: "Sve prijedloge slobodno pošaljite u obrazac na dnu stranice, želimo da Korner bude najbolji što može biti"
        },

    ]

    const userFaq = [
        {
            title: "Što je Korner?",
            text: ["Korner je platforma za rezervaciju sportskih termina", " Glavna svrha mu je organizacija amaterskih sportskih termina koja uključuje rezervaciju terena i okupljanje ekipe koja će taj termin igrati"]
        },
        {
            title: "Naplaćuje li se korištenje Kornera?",
            text: ["Ne. Platforma je za korisnike potpuno besplatna"]
        },
        {
            title: "Koji tereni su dostupni?",
            text: ["Trenutno je dostupno nekoliko terena, ako želite da i teren na kojem ste do sada igrali bude na platformi, slobodno uputite vlasnika da se registrira u Korner"]
        },
        {
            title: "Mogu li koristiti Korner bez korisničkog računa?",
            text: ["Da, ali samo za potvrđivanje svog dolaska na termin. Za rezervaciju termina potreban je korisnički račun.",
                "Svakako preporučamo da napravite korisnički račun kako biste mogli imati evidenciju svih utakmica koje ste odigrali, ali i sami organizirati termin"]

        },
        {
            title: "Kako rezervirati termin?",
            text: ["Kako biste rezervirali termin morate imati račun na Korner platformi, podsjećamo da je Korner potpuno besplatan.", "Rezervacija termina ide kroz nekoliko kratkih koraka:",
                <List>
                    <ListItem>1. Odaberite teren na kojem želite igrati</ListItem>
                    <ListItem>2. Izaberite datum i željeno trajanje te pritisnite na jedan od ponuđenih
                        termina</ListItem>
                    <ListItem>3. Kopirajte poveznicu klikom na gumb i pošaljite ju svojim prijateljima</ListItem>
                    <ListItem>4. Pričekajte odgovore svojih prijatelja i kada imate dovoljno igrača pritisnite gumb
                        rezerviraj</ListItem>
                </List>]

        },
        {
            title: "Kako potvrditi dolazak na termin?",
            text: ["Dolazak na termin potvrđujete klikom na link koji vam je poslao organizator termina.",
                "Za potvdu termina ne morate imati korisnički račun. Usprkos tome, savjetujemo vam da ga napravite kako biste mogli promijeniti odluku o dolasku na termin te pratiti svoje odigrane termine"]

        }

    ]

    const ownerFaq = [
        {
            title: "Što je Korner?",
            text: ["Korner je platforma za rezervaciju sportskih termina", " Glavna svrha mu je organizacija amaterskih sportskih termina koja uključuje rezervaciju terena i okupljanje ekipe koja će taj termin igrati"]
        },
        {
            title: "Naplaćuje li se korištenje Kornera?",
            text: ["Vlasnicima terena naplaćuje se naknada od 1€ po dogovorenom terminu preko Korner platforme", "Naknada se NE obračunava na termine koje je vlasnik terena sam rezervirao", "Naknada se plaća po izdanom mjesečnom računu"]
        },
        {
            title: "Mogu li koristiti Korner bez korisničkog računa?",
            text: ["Za upravljanje terenima morate imati korisnički račun"]

        },
        {
            title: "Kako rezervirati termin?",
            text: ["Na sve termine koje rezervirate sami NE naplaćuje se naknada", "Rezervacija termina ide kroz nekoliko kratkih koraka:",
                <List>
                    <ListItem>1. Odaberite svoj teren</ListItem>
                    <ListItem>2. Izaberite datum i željeno trajanje te pritisnite na jedan od ponuđenih
                        termina</ListItem>
                    <ListItem>3. Upišite ime ekipe koja vam dolazi na termin</ListItem>
                    <ListItem>4. Pritisnite rezerviraj i termin je rezerviran</ListItem>
                </List>]

        },
        {
            title: "Mogu li otkazati termin?",
            text: ["Kao vlasnik terena, termine koje ste vi napravili možete otkazati", "Termini koje su rezervirali korisnici ne možete otkazati"]
        },
        {
            title: "Što su žuto označeni termini",
            text: ["Žuti termini označavaju da je termin u najavi, odnosno da se ekipe još skupljaju", "Preporuka je izbjegavati žute termine prilikom rezervacije jer se u slučaju rezervacije otkazuje termin u najavi"]
        }
    ]

    const mapToCard = (cardInfo) => {
        return (
            <Card key={cardInfo.heading} marginBlock={"1rem"} variation={"elevated"}>
                <Flex>
                    {!cardInfo.inverted && <Image alignSelf={"center"} alt={cardInfo.alt} width={"40%"} height={"auto"}
                                                  src={cardInfo.img}/>}
                    <Flex direction={"column"}>
                        <Heading level={4}>{cardInfo.heading}</Heading>
                        <Text>{cardInfo.text}</Text>
                    </Flex>
                    {cardInfo.inverted && <Image alignSelf={"center"} alt={cardInfo.alt} width={"40%"} height={"auto"}
                                                 src={cardInfo.img}/>}
                </Flex>
            </Card>
        )
    }

    const mapToFaq = (faq) => {
        return (
            {
                trigger: faq.title,
                value: faq.title,
                content: faq.text.map(a => (
                    <Text key={a} marginBottom={"1rem"}>
                        {a}
                    </Text>
                ))

            }
        )
    }

    return (
        <Flex direction={"column"}>
            {!isHelp && <Flex marginTop={"1rem"} direction={"column"} alignItems={"center"}>
                <Card marginInline={"1rem"} backgroundColor={"transparent"} alignItems={"center"}>
                    <Heading fontWeight={"bold"} color={"brand.primary.100"} level={2}>Jednostavno rezerviraj sportske
                        terene</Heading>
                </Card>
                <Button variation={"primary"} onClick={() => navigate('/home')}>Prijava/Registracija</Button>
            </Flex>}

            <Tabs
                defaultValue={"players"}
                items={[
                    {
                        label: "Igrači", value: "players", content: <>
                            {userCardList.map(mapToCard)}
                            <Heading margin={"1rem"} level={3}>Često postavljena pitanja</Heading>
                            <Accordion type="single"
                                       items={userFaq.map(mapToFaq)}>
                            </Accordion>
                        </>
                    },
                    {
                        label: "Vlasnici terena", value: "owners", content: <>
                            {ownerCardList.map(mapToCard)}
                            <Heading margin={"1rem"} level={3}>Često postavljena pitanja</Heading>
                            <Accordion type="single"
                                       items={ownerFaq.map(mapToFaq)}>
                            </Accordion>
                        </>
                    },
                    {}
                ]}>


            </Tabs>

            <ContactForm/>

        </Flex>)
}

export default LandingPage;
