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
    background-color: rgb(31 31 31 / 14%);
    z-index: 1;

    @media (max-width: 1080px) {
        justify-content: flex-start;
    }
`;

export const Logo = styled.div `
    position: absolute;
    font-family: 'Karla', sans-serif;
    font-weight: 200;
    font-size: 36px;
    color: #FFFFFF;
    margin-right: 16px;
    left: 16vw;
    margin-top: 16px;
    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    @media (max-width: 1080px) {
        position: relative;
        left: 16px;
        margin-top: 10px;
        a {
            img {
                height: 40px;
                width: auto;
            }
        }
    }
`;

export const Ul = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 1080px) {
        display: ${({ openMenu }) => openMenu ? 'none' : 'flex'};
        width: 100%;
        background-color: #FFFFFF;
        flex-direction: column;
        position: absolute;
        top: 60px;
        padding-bottom: 24px;
    }
`;

export const Li = styled.li `
    margin-right: 16px;
    a {
        position: relative;
        display: block;
        margin: 16px;
        width: 56px;
        text-decoration: none;
        color: white;
        font-size: 18px;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            border-radius: 4px;
            background-color: #FFFFFF;
            bottom: -4px;
            left: -4px;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform .3s ease-in-out;
        }
        &:hover::before {
            transform-origin: left;
            transform: scaleX(1);
        }
    }

    @media (max-width: 1080px) {
        margin-right: 0;
        a {
            color: #000000;
            text-align: center;
            width: auto;
        }
    }
`;

export const Button = styled.a `
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 6px 16px;
    border-radius: 4px;
    color: #FFFFFF;
    font-weight: 700;
    text-decoration: none;
    right: 16vw;
    border: 1px solid #FFFFFF;
    transition: 0.6s;
    font-size: 14px;
    line-height: 14px;
    &:hover {
        border-radius: 16px;
    }

    @media (max-width: 1080px) {
        position: relative;
        right: 0;
        margin-top: 16px;
        color: #000000;
        font-size: 18px;
        font-weight: 400;
    }
`;

export const Hamburger = styled.div `
    display: none;
    font-size: 28px;
    width: 30px;
    height: 40px;
    position: absolute;
    right: 16px;
    cursor: pointer;
    color: #FFFFFF;

    @media (max-width: 1080px) {
        display: flex;
    }
`;