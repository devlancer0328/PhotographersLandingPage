import styled from "styled-components";

export const AboutContainer = styled.div`
  margin: 0 auto;
  height: auto;
  padding: 92px 16vw 92px 16vw;
  h1 {
    font-style: italic;
    font-weight: 600;
    span {
      font-style: normal;
      font-weight: 300;
    }
  }
  p {
    color: #888888;
    text-align: justify;
  }
  @media (max-width: 760px) {
    padding: 48px 32px;
  }
`;
