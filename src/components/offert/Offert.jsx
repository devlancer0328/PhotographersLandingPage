import { OffertContainer } from "./OffertStyle";
import { Card } from "./Card/Card";
import styled from "styled-components";
import img01 from "./../../img/offert/offert-photo01.jpg";
import img02 from "./../../img/offert/offert-photo02.jpg";
import img03 from "./../../img/offert/offert-photo03.jpg";

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

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
          <Card title={"My Card 01"} date={1} imgUrl={img01} />
          <Separator />
          <Card title={"My Card 02"} date={15} imgUrl={img02} />
          <Separator />
          <Card title={"My Card 03"} date={20} imgUrl={img03} />
          <Separator />
          <Card title={"My Card 04"} date={15} imgUrl={img02} />
          <Separator />
          <Card title={"My Card 05"} date={20} imgUrl={img03} />
        </CardContainer>
      </OffertContainer>
    </div>
  );
};

export default Pricelist;
