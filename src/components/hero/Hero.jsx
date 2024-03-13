import { HeroContainer, Img, HeroText } from "./HeroStyle";
import heroImage from "./../../img/background-image.jpg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(() => {
        AOS.init({});
      }, []);

    return ( 
        <div id="home">
            <HeroContainer>
                <Img src={heroImage} alt="hero image" />
                <HeroText data-aos="fade-right">Uwieczniamy najpiękniejsze <span>momenty</span></HeroText>
            </HeroContainer>
        </div>
     );
}

export default Hero;