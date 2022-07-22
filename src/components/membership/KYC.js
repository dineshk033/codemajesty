import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Placeholder } from "../../shared/components/input";
import { Spacer } from "../../shared/components/spacer";
import { TextTypo, TextTypo1 } from "../../shared/components/utility";

const CPlaceholder = styled(Placeholder)`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const KYC = () => {
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("list", { replace: true });
  }
  return (
    <Spacer margin="86px 30px 42px 32px">
      <CPlaceholder width="326px" height="285px">
        <TextTypo1 weight="400" color="#414D55" width="266px" height="17px">
          No membership
        </TextTypo1>
        <Spacer margin="27px 0 0 0" />
        <TextTypo1 weight="400" color="#414D55" width="266px" height="17px">
          Get to know RYMC Membership
        </TextTypo1>
        <Spacer margin="27px 0 0 0" />
      </CPlaceholder>
      <Spacer margin="27px 0 0 0" />
      <CPlaceholder
        onClick={handleNavigation}
        height="40px"
        width="199px"
        justify="center"
      >
        <TextTypo>
          <i style={{ marginRight: "6px" }} class="fa-solid fa-circle-plus"></i>
          Get your membership
        </TextTypo>
      </CPlaceholder>
    </Spacer>
  );
};
