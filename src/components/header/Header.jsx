import { Navbar, Logo, Ul, Li, Button, linkStyle, buttonStyle } from "./HeaderStyle";
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <Navbar>
            <Logo>
                Logo
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
                <Button>
                    <Link to={`#`} style={buttonStyle}>Contact</Link>
                </Button>
            </Ul>
        </Navbar>
     );
}

export default Header;