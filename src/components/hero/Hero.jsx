import { HeroContainer, Img } from "./HeroStyle";
import heroImage from "./../../img/background-image.jpg"

const Hero = () => {
    return ( 
        <div>
            <HeroContainer>
                <Img src={heroImage} alt="hero image" />
            </HeroContainer>
        </div>
     );
}

export default Hero;