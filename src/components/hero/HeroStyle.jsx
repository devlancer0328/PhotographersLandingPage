import styled from "styled-components";

export const HeroContainer = styled.div `
    position: relative;
    width: 100vw;
    height: 80vh;
    &::after {
        content: "";
        background: rgb(211 211 211 / 16%);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 43vw;
        bottom: 0;
        z-index: 0;
    }
`;

export const HeroText = styled.p `
    position: absolute;
    top: 40vh;
    left: 22vw;
    z-index: 0;
    font-size: 48px;
    font-weight: 200;
    line-height: 120%;
    word-wrap: normal;
    width: 160px;
    color: #FFFFFF;
    z-index: 1;
    span {
        font-weight: 400;
    }
    @media (max-width: 1080px) {
        top: 50vh;
        font-size: 28px;
    }
    
`;

export const Img = styled.img `
    width: 100vw;
    height: 80vh;
    object-fit: cover;
`;
