import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 92px 16vw 92px 16vw;
  @media (max-width: 760px) {
    padding: 48px 32px;
    flex-direction: column;
  }
`;

export const AboutContainer = styled.div`
  margin: 0 auto;
  height: auto;
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
`;

export const ImageContainer = styled.div`
  margin: 0 40px 0 0;
  img {
    height: 100%;
    width: 300px;
    object-fit: cover;
  }
  @media (max-width: 760px) {
    margin: 0 0 24px 0;
    img {
      width: 100%;
      max-width: 360px;
    }
  }
`;
