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

export const PhoneNo = () => {
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("verify", { replace: true });
  }
  return (
    <>
      <CPlaceholder height="48px" width="80%" justify="start">
        <Typography width="58px" height="17px" color="#414d55">
          &nbsp;&nbsp;&nbsp;+966
        </Typography>
        <Spacer margin="0 3px 0 0" />
        <Typography width="255px" height="17px" color="#C4C4C4">
          555589843
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
          <TextTypo>Request verification code</TextTypo>
        </Spacer>
      </CPlaceholder>
    </>
  );
};
