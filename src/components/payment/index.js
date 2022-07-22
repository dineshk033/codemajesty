import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Spacer } from "../../shared/components/spacer";
import Call from "../../asset/call.svg";
import Bell from "../../asset/bell.svg";
import { TextTypo2 } from "../../shared/components/utility";

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
  justify-content: ${(props) => props.justify}; ;
`;

const Circle = styled.div`
  width: 54px;
  height: 54px;
  margin-left: 30px;
  background: #4d7cf3;
  border-radius: 50%;
`;

export const Pay = () => {
  return (
    <>
      <Spacer margin="50px 0 0 0" />
      <Flex justify="space-between">
        <Flex justify="start">
          <Circle />
          <Spacer margin="0 10px 0 0" />
          <TextTypo2 size="16px" color="#414D55">
            adel saeed
          </TextTypo2>
        </Flex>
        <Flex justify="end">
          <Icon src={Call} alt="Call" />
          <Spacer margin="0 26px 0 0"></Spacer>
          <Icon src={Bell} alt="Bell" />
          <Spacer margin="0 26px 0 0"></Spacer>
        </Flex>
      </Flex>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
