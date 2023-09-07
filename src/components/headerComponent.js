import {Flex, Heading, Image} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import MenuComponent from "./menuComponent";

const HeaderComponent = ({user}) => {
    const navigate = useNavigate();

    const goToHome = () => navigate("/")

    const LogoAndAppName = () => (
        <Heading level={"2"} color={"brand.primary.100"} fontWeight={"bold"} fontStyle={"italic"} onClick={goToHome}>
            k<Image alignSelf={"center"} height={"1.4rem"} alt={"O"} src={"/korner-logo2.png"} defaultValue={"o"}
                    onClick={goToHome}></Image>rner
        </Heading>)

    return (
        <Flex marginInline={"1rem"} justifyContent={"space-between"}>
            <LogoAndAppName/>
            {user && <MenuComponent user={user}/>}
        </Flex>
    )
}

export default HeaderComponent
