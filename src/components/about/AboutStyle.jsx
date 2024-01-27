import styled from "styled-components";

export const AboutContainer = styled.div `
    margin: 0 auto;
    height: auto;
    padding: 60px 16vw 64px 16vw;
    h1 {
        margin-bottom: 16px;
        font-style: italic;
        font-weight: 600;
        span {
            font-style: normal;
            font-weight: 300;
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