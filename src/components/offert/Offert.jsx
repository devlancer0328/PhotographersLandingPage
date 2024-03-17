import { OffertContainer } from "./OffertStyle";
import { Card } from "./Card/Card";
import styled from "styled-components";
import img01 from "./../../img/offert/offert-photo01.jpg";
import img02 from "./../../img/offert/offert-photo02.jpg";
import img03 from "./../../img/offert/offert-photo03.jpg";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Pricelist = () => {
  return (
    <div id="pricelist">
      <OffertContainer>
        <CardContainer>
          <Card title={"Karta 01"} date={1} imgUrl={img01} />
          <Card title={"Karta 02"} date={12} imgUrl={img02} />
          <Card title={"Karta 03"} date={20} imgUrl={img03} />
          <Card title={"Karta 04"} date={15} imgUrl={img02} />
          <Card title={"Karta 05"} date={24} imgUrl={img03} />
          <Card title={"Karta 01"} date={30} imgUrl={img01} />
        </CardContainer>
      </OffertContainer>
    </div>
  );
};

export default Pricelist;
