import styled from "styled-components";
import { Spacer } from "./spacer";
import { CardEffect1, TextTypo1 } from "./utility";

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 21px 0 17px;
`;
const Circle = styled.div`
  width: 26px;
  height: 26px;

  background: #d9d9d9;
  border-radius: 50%;
`;
const Grid = styled(Spacer)`
  text-align: left;
`;
const HeaderCard = ({ header, price }) => (
  <CardHeaderContainer>
    <Circle />
    <TextTypo1 weight="500" color="#414D55" width="160px" height="17px">
      {header}
    </TextTypo1>
    <TextTypo1 weight="500" color="#4D7CF3" width="100px" height="17px">
      {price}
    </TextTypo1>
  </CardHeaderContainer>
);
export const Card = ({ text1, text2, text3, header, price, color }) => {
  return (
    <>
      <CardEffect1 width="326px" height="171px" color={color}>
        <HeaderCard header={header} price={price} />
        <Grid margin="0 42px 0 32px">
          <TextTypo1 weight="400" color="#414D55" width="265px" height="17px">
            {text1}
          </TextTypo1>
          <Spacer margin="8px" />
          <TextTypo1 weight="400" color="#414D55" width="265px" height="35px">
            {text2}
          </TextTypo1>
          <Spacer margin="8px" />
          <TextTypo1 weight="400" color="#414D55" width="265px" height="17px">
            {text3}
          </TextTypo1>
        </Grid>
      </CardEffect1>
      <Spacer margin="17px 0 0 0" />
    </>
  );
};
Card.defaultProps = {
  text1: "Valid for one year",
  text2: "Examination of the clinic at a discounted price of 80 riyals",
  text3: "30% discount on dental services",
  header: "Platinum Membership",
  price: "89 SAR",
  color: "#414D55",
};
