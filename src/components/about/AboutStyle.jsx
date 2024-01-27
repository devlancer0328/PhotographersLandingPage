import styled from "styled-components";

export const AboutContainer = styled.div `
    margin: 0 auto;
    height: auto;
    padding: 60px 16vw 64px 16vw;
    h1 {
        margin-bottom: 16px;
        span {
            font-family: 'Carter One', sans-serif;
        }
    }
    p {
        color: #888888;
        width: 40vw;
        text-align: justify;
    }

    @media (max-width: 1080px) {
        p {
            width: 100%;
        }
    }
`;