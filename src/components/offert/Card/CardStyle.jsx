import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  max-width: 400px;
  z-index: 0;
  margin: 16px;
  @media (max-width: 600px) {
    max-width: unset;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 100%);
    margin: 0 0 16px 0;
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 8px 0 8px 0;
  background: linear-gradient(
    110.78deg,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background: linear-gradient(
    110.78deg,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%
  );
  height: 48px;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.a`
  color: #000000;
  text-decoration: none;
  &:hover {
    font-weight: 700;
  }
`;
