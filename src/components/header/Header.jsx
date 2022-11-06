import { Navbar, Logo, Ul, Li } from "./HeaderStyle";
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <Navbar>
            <Logo>
                Logo
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
                <Li>
                    <Link to={`#`}>Contact</Link>
                </Li>
            </Ul>
        </Navbar>
     );
}

export default Header;