import styled from "styled-components";

export const HeroContainer = styled.div `
    position: relative;
    width: 100vw;
    height: 80vh;
    &::after {
        content: "";
        background: rgb(13 13 12 / 32%);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 35vw;
        bottom: 0;
        z-index: 0;
    }
`;

export const Img = styled.img `
    width: 100vw;
    height: 80vh;
    object-fit: cover;
`;
