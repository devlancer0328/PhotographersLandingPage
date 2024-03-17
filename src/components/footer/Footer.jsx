import CurrentYear from "../common/CurrentYear";
import { FooterContainer } from "./FooterStyle";

const Footer = () => {
    return ( 
        <div id="footer">
            <FooterContainer>
                <p>Photo Passion - Uchwyć moment © <CurrentYear/></p>
            </FooterContainer>
        </div>
     );
}

export default Footer;