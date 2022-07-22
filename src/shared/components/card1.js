import styled from "styled-components";
import { CardEffect1, TextTypo1, TextTypo2 } from "./utility";
const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  text-align: left;
`;

const CardContainer = styled(CardEffect1)`
  padding: 5px 25px;
`;
export const Card1 = ({ color }) => {
  return (
    <CardContainer width="326px" height="171px" color={color}>
      <TextTypo1 weight="500" color="#414D55" width="160px" height="17px">
        Platinum Membership
      </TextTypo1>
      <Flex>
        <TextTypo1 weight="500" color="#4D7CF3" width="155px" height="17px">
          price includes tax
        </TextTypo1>
        <TextTypo1 weight="500" color="#4D7CF3" width="55px" height="17px">
          89
        </TextTypo1>
      </Flex>
      <TextTypo2 size="14px" color="#414D55">
        Examination of the clinic at a discounted price of 80 riyals
      </TextTypo2>
      <TextTypo2 size="14px" color="#414D55">
        30% discount on dental services
      </TextTypo2>
      <TextTypo2 size="16px" color="#414D55">
        Valid for one year
      </TextTypo2>
    </CardContainer>
  );
};

Card1.defaultProps = {
  color: "#414D55",
};
