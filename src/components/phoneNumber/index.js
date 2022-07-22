import styled from "styled-components";
import LOGO from "../../asset/logo1.svg";
import Call from "../../asset/call.svg";
import Bell from "../../asset/bell.svg";
import { Spacer } from "../../shared/components/spacer";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  margin: auto;
  text-align: center;
`;
const Image = styled.img`
  padding-bottom: 16px;
  width: 289px;
  height: 289px;
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const PhoneNumber = () => {
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
  `;
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
        <Image src={LOGO} alt="logo" />
        <Outlet />
      </Container>
    </>
  );
};

export default PhoneNumber;
