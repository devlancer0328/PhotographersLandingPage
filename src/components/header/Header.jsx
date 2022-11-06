import { Navbar, Logo, Ul, Li, Button, buttonStyle } from "./HeaderStyle";
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <Navbar>
            <Logo>
                PhotoPassion
            </Logo>
            <Ul>
                <Li>
                    <Link to={`#`}>Home</Link>
                </Li>
                <Li>
                    <Link to={`#`}>About</Link>
                </Li>
                <Li>
                    <Link to={`#`}>Article</Link>
                </Li>
                <Li>
                    <Link to={`#`}>Gallery</Link>
                </Li>
                <Button as={Link} to={`#`}>
                    Contact
                </Button>
            </Ul>
        </Navbar>
     );
}

export default Header;