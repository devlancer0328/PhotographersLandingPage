import { useState } from "react";
import { Navbar, Logo, Ul, Li, Button, Hamburger } from "./HeaderStyle";
import { HashLink as Link } from 'react-router-hash-link';
import logoImg from './../../img/logo.png'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return ( 
        <Navbar>
            <Logo>
                <Link to={`/`}>
                    <img src={logoImg} alt="logo" width="241" height="56"/>
                </Link>
            </Logo>
            <Ul openMenu={!openMenu}>
                <Li>
                    <Link to={`#about`}>O nas</Link>
                </Li>
                <Li>
                    <Link to={`#offert`}>Oferta</Link>
                </Li>
                <Li>
                    <Link to={`#gallery`}>Portfolio</Link>
                </Li>
                <Li>
                    <Link to={`#pricelist`}>Cennik</Link>
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