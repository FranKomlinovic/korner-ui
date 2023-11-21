import {Flex, Heading, Image, Menu, MenuItem} from "@aws-amplify/ui-react";
import {FaHome, FaPlusCircle, FaQuestion, FaRunning} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import useGetPhoto from "../custom-hooks/useGetPhoto";

const MenuComponent = ({user}) => {
    const navigate = useNavigate();

    const photo = useGetPhoto(user.picture);
    const goToProfile = () => navigate("/profile")

    return (
        <Flex marginBlock={"0.5rem"}>
            <Menu marginRight={"1rem"} border={"none"} padding={"0.1rem"}>
                <MenuItem onClick={() => navigate("/home")}>
                    <Flex alignItems={"center"}>
                        <FaHome size={"1.5rem"}/><Heading>Home</Heading>
                    </Flex>
                </MenuItem>
                <MenuItem onClick={() => navigate("/fields")}>
                    <Flex alignItems={"center"}>
                        <FaPlusCircle size={"1.5rem"}/><Heading>Rezerviraj</Heading>
                    </Flex>
                </MenuItem>
                <MenuItem onClick={() => navigate("/played")}>
                    <Flex alignItems={"center"}>
                        <FaRunning size={"1.5rem"}/><Heading>Odigrani termini</Heading>
                    </Flex>
                </MenuItem>
                <MenuItem onClick={() => navigate("/help")}>
                    <Flex alignItems={"center"}>
                        <FaQuestion size={"1.5rem"}/><Heading>Upute</Heading>
                    </Flex>
                </MenuItem>
                <MenuItem onClick={goToProfile}>
                    <Flex alignItems={"center"}>
                        <Image src={photo} borderRadius={400} objectFit={"cover"} width={"1.5rem"}
                               height={"1.5rem"} alt={"Profilna slika"}/><Heading>Profil</Heading>
                    </Flex>
                </MenuItem>
            </Menu>
        </Flex>
    )
}

export default MenuComponent
