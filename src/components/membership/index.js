import Call from "../../asset/call.svg";
import Bell from "../../asset/bell.svg";
import { Spacer } from "../../shared/components/spacer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  text-align: center;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

function MemberShip() {
  return (
    <>
      <Spacer margin="50px 0 0 0" />
      <Flex>
        <Icon src={Call} alt="Call" />
        <Spacer margin="0 26px 0 0"></Spacer>
        <Icon src={Bell} alt="Bell" />
        <Spacer margin="0 26px 0 0"></Spacer>
      </Flex>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default MemberShip;
