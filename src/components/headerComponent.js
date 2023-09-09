import {Flex, Image} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import MenuComponent from "./menuComponent";

const HeaderComponent = ({user}) => {
    const navigate = useNavigate();

    const goToHome = () => navigate("/home")

    return (
        <Flex marginInline={"1rem"} justifyContent={"space-between"}>
            <Image alignSelf={"center"} height={"2rem"} src={"/korner-logo-text.png"} defaultValue={"Korner"}
                   onClick={goToHome} alt={"Korner"}></Image>
            {user && <MenuComponent user={user}/>}
        </Flex>
    )
}

export default HeaderComponent
