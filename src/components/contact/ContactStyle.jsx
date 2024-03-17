import styled from "styled-components";

export const ContactContainer = styled.div`
  margin: 0 auto;
  height: auto;
  background-color: #ffffff;
  padding: 92px 16vw 92px 16vw;
  @media (max-width: 760px) {
    padding: 48px 32px;
  }
`;

export const ContactTextWrapper = styled.div`
  p {
    margin: 0 0 12px 0;
    a {
      color: orange;
    }
  }
`;

export const PersonName = styled.strong`
  display: inline-flex;
  font-weight: 700;
  font-size: 18px;
`;
