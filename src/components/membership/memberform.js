import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card1 } from "../../shared/components/card1";
import { Placeholder } from "../../shared/components/input";
import { Spacer } from "../../shared/components/spacer";
import { TextTypo, TextTypo2 } from "../../shared/components/utility";

const CPlaceholder = styled(Placeholder)`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;
  padding-left: 20px;
`;
const DATA = ["National Identity", "Full Name", "Date of Birth"];
const SubCard = ({ text }) => (
  <Spacer margin="25px 0">
    <CPlaceholder height="48px" width="80vw">
      <TextTypo2 size="16px" color="#C4C4C4">
        &nbsp;&nbsp; &nbsp;&nbsp;{text}
      </TextTypo2>
    </CPlaceholder>
  </Spacer>
);

export const MemberForm = () => {
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("/pay", { replace: true });
  }

  return (
    <Container>
      <Card1 />
      <Spacer margin="27px 0 0 0" />
      {DATA.map((item) => (
        <SubCard text={item} key={item} />
      ))}
      <CPlaceholder
        onClick={handleNavigation}
        style={{ justifyContent: "center" }}
        height="40px"
        width="200px"
      >
        <TextTypo>MADA</TextTypo>
      </CPlaceholder>
      <Spacer margin="10px" />
      <CPlaceholder
        onClick={handleNavigation}
        style={{ justifyContent: "center" }}
        height="40px"
        width="200px"
      >
        <TextTypo>APPLE PAY</TextTypo>
      </CPlaceholder>
    </Container>
  );
};
