import { HeroContainer, Img, HeroText } from "./HeroStyle";
import heroImage from "./../../img/background-image.jpg"

const Hero = () => {
    return ( 
        <div id="home">
            <HeroContainer>
                <Img src={heroImage} alt="hero image" />
                <HeroText>Uwieczniamy najpiękniejsze momenty</HeroText>
            </HeroContainer>
        </div>
     );
}

export default Hero;