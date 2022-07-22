import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Placeholder } from "../../shared/components/input";
import { Spacer } from "../../shared/components/spacer";
import {
  CardEffect1,
  TextTypo,
  TextTypo2,
} from "../../shared/components/utility";

const Flex = styled(Spacer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280px;
  justify-content: space-around;
`;
const Flex1 = styled(Spacer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
const CTypo = styled(TextTypo2)`
  text-align: center;
`;

const CPlaceholder = styled(Placeholder)`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Confirmation = () => {
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("/complete", { replace: true });
  }
  return (
    <Flex1 margin="65px 0 30px 32px">
      <CardEffect1 width="80vw" height="285px" color="#D39429">
        <Flex justify="space-around">
          <Flex1 justify="start">
            <TextTypo2 size="24px" color="#414D55">
              Golden Membership
            </TextTypo2>
            <Spacer margin="10px 0 0 0" />
            <TextTypo2 size="20px" color="#414D55">
              Adel Saeed Alqahtani
            </TextTypo2>
          </Flex1>
          <div style={{ width: "50vw" }}>
            <CTypo size="20px" color="#414D55">
              Click here to view membership information
            </CTypo>
          </div>
        </Flex>
      </CardEffect1>
      <Spacer margin="27px 0 0 0" />
      <CPlaceholder
        onClick={handleNavigation}
        height="40px"
        width="80%"
        justify="center"
      >
        <TextTypo>
          <i style={{ marginRight: "6px" }} class="fa-solid fa-circle-plus"></i>
          Add membership for a family member
        </TextTypo>
      </CPlaceholder>
    </Flex1>
  );
};
