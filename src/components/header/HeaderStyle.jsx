import styled from "styled-components";

export const Navbar = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

export const Logo = styled.div `
    position: absolute;
    font-family: 'Carter One', sans-serif;
    font-size: 24px;
    color: #000000;
    margin-right: 16px;
    left: 16vw;
    a {
        text-decoration: none;
        color: #000000;
    }
`;

export const Ul = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Li = styled.li `
    margin-right: 16px;
    a {
        display: block;
        margin: 16px;
        width: 56px;
        text-decoration: none;
        color: blue;
        &:hover {
            font-weight: 600;
        }
    }
`;

export const Button = styled.a `
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(45deg, rgba(89, 131, 252, 1) 31%, rgba(41, 53, 86, 1) 100%);
    width: 120px;
    padding: 8px 16px;
    border-radius: 24px;
    color: #FFFFFF;
    font-weight: 700;
    text-decoration: none;
    right: 16vw;
    &:hover {
        background-image: linear-gradient(60deg, rgba(89, 131, 252, 1) 81%, rgba(41, 53, 86, 1) 100%);
    }
`;