import { Navbar, Logo, Ul, Li, Button } from "./HeaderStyle";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return ( 
        <Navbar>
            <Logo>
                PhotoPassion
            </Logo>
            <Ul>
                <Li>
                    <Link to={`#home`}>Home</Link>
                </Li>
                <Li>
                    <Link to={`#about`}>About</Link>
                </Li>
                <Li>
                    <Link to={`#article`}>Article</Link>
                </Li>
                <Li>
                    <Link to={`#gallery`}>Gallery</Link>
                </Li>
                <Button as={Link} to={`#contact`}>
                    Contact
                </Button>
            </Ul>
        </Navbar>
     );
}

export default Header;