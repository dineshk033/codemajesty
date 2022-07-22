import styled from "styled-components";
import { TextTypo2 } from "../../shared/components/utility";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #d39429;
  height: 55%;
  border-radius: 10% 10% 0 0;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;
export const Compelete = () => {
  return (
    <Container>
      <Section>
        <TextTypo2 size="24px" color="#FFFFFF">
          Golden Membership
        </TextTypo2>
        <TextTypo2 size="20px" color="#FFFFFF">
          Adel Saeed Alqahtani
        </TextTypo2>
        <TextTypo2 size="32px" color="#FFFFFF">
          1119989899
        </TextTypo2>
        <TextTypo2 size="32px" color="#FFFFFF">
          Expire date
        </TextTypo2>
        <TextTypo2 size="32px" color="#FFFFFF">
          01/01/2023
        </TextTypo2>
      </Section>
    </Container>
  );
};
