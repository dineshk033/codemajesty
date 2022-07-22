import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LOGO from "../../asset/logo.svg";
import { Button } from "../../shared/components/button";
import { Spacer } from "../../shared/components/spacer";
import { Typography } from "../../shared/components/typography";
import { Container } from "../../shared/components/utility";

const Image = styled.img`
  padding-bottom: 55px;
`;
const Member = styled(Typography)`
  padding-bottom: 10px;
`;
const Para = styled(Typography)`
  padding-bottom: 36px;
`;

const HomePage = () => {
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("/phone", { replace: true });
  }
  return (
    <Container>
      <Image src={LOGO} alt="logo" />
      <Member>RYMC MEMBERSHIPE</Member>
      <Para>Premium membership for non-medical insurance card holders</Para>
      <Typography>We are at your service</Typography>
      <Spacer margin="71px 0 0 0" />
      <Button height="40px" width="199px" onClick={() => handleNavigation()}>
        Next
      </Button>
    </Container>
  );
};

export default HomePage;
