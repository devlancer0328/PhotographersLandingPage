import { useState } from "react";
import { Navbar, Logo, Ul, Li, Button, Hamburger } from "./HeaderStyle";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return ( 
        <Navbar>
            <Logo>
                <Link to={`#home`}>PhotoPassion</Link>
            </Logo>
            <Ul openMenu={!openMenu}>
                <Li>
                    <Link to={`#home`}>Home</Link>
                </Li>
                <Li>
                    <Link to={`#about`}>O nas</Link>
                </Li>
                <Li>
                    <Link to={`#article`}>Artykuł</Link>
                </Li>
                <Li>
                    <Link to={`#gallery`}>Galeria</Link>
                </Li>
                <Button as={Link} to={`#contact`}>
                    Kontakt
                </Button>
            </Ul>
            <Hamburger onClick={toggleMenu}>☰</Hamburger>
        </Navbar>
     );
}

export default Header;