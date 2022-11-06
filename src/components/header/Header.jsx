import { Navbar, Logo, Ul, Li, Button, linkStyle, buttonStyle } from "./HeaderStyle";
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <Navbar>
            <Logo>
                PhotoPassion
            </Logo>
            <Ul>
                <Li>
                    <Link to={`#`} style={linkStyle}>Home</Link>
                </Li>
                <Li>
                    <Link to={`#`} style={linkStyle}>About</Link>
                </Li>
                <Li>
                    <Link to={`#`} style={linkStyle}>Article</Link>
                </Li>
                <Li>
                    <Link to={`#`} style={linkStyle}>Gallery</Link>
                </Li>
                <Button as={Link} to={`#`} style={buttonStyle}>
                    Contact
                </Button>
            </Ul>
        </Navbar>
     );
}

export default Header;