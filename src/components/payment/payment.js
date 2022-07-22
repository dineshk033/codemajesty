import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card3 } from "../../shared/components/card3";
import { Placeholder } from "../../shared/components/input";
import { Spacer } from "../../shared/components/spacer";
import { TextTypo, TextTypo2 } from "../../shared/components/utility";
import LOGO3 from "../../asset/logo3.png";
const Container = styled.div`
  padding: 65px 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 170px;
  height: 60px;
  margin-bottom: 20px;
`;
const CPlaceholder = styled(Placeholder)`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const DATA = ["card number", "name on the card"];
const SubCard = ({ text }) => (
  <Spacer margin="15px 0">
    <CPlaceholder height="48px" width="80vw">
      <TextTypo2 size="16px" color="#C4C4C4">
        &nbsp;&nbsp; &nbsp;&nbsp;{text}
      </TextTypo2>
    </CPlaceholder>
  </Spacer>
);
const Flex = styled(Spacer)`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify}; ;
`;
export const Payment = () => {
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("../confirm", { replace: true });
  }

  return (
    <Container>
      <Card3 />
      <Spacer margin="40px 0 0 0" />
      <Image src={LOGO3} alt="Logo" />
      {DATA.map((text) => (
        <SubCard text={text} key={text} />
      ))}
      <Flex margin="15px 0" justify="space-between">
        <CPlaceholder
          style={{ marginRight: "10px" }}
          height="48px"
          width="40vw"
        >
          <TextTypo2 size="16px" color="#C4C4C4">
            &nbsp;&nbsp; &nbsp;&nbsp;Expiry date
          </TextTypo2>
        </CPlaceholder>
        <CPlaceholder height="48px" width="39vw">
          <TextTypo2 size="16px" color="#C4C4C4">
            &nbsp;&nbsp; &nbsp;&nbsp;secret code
          </TextTypo2>
        </CPlaceholder>
      </Flex>
      <Spacer margin="10px" />
      <CPlaceholder
        onClick={handleNavigation}
        style={{ justifyContent: "center" }}
        height="40px"
        width="200px"
      >
        <TextTypo>PAY</TextTypo>
      </CPlaceholder>
    </Container>
  );
};
