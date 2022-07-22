import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Placeholder } from "../../shared/components/input";
import { Spacer } from "../../shared/components/spacer";
import { TextTypo } from "../../shared/components/utility";

const CPlaceholder = styled(Placeholder)`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;
const Typography = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  color: ${(props) => props.color};
`;

const Verify = () => {
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("/member", { replace: true });
  }
  return (
    <>
      <CPlaceholder height="48px" width="80%" justify="center">
        <Typography width="255px" height="17px" color="#C4C4C4">
          Enter the verification code
        </Typography>
      </CPlaceholder>
      <Spacer margin="42px 0 0 0" />
      <CPlaceholder
        height="40px"
        width="199px"
        justify="center"
        onClick={handleNavigation}
      >
        <Spacer margin="10px">
          <TextTypo>Check now</TextTypo>
        </Spacer>
      </CPlaceholder>
    </>
  );
};

export default Verify;
