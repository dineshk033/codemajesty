import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../../shared/components/card";
import { Placeholder } from "../../shared/components/input";
import { TextTypo } from "../../shared/components/utility";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;
`;
const CPlaceholder = styled(Placeholder)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DATA = [
  {
    text1: "Valid for one year",
    text2: "Examination of the clinic at a discounted price of 80 riyals",
    text3: "30% discount on dental services",
    header: "Platinum Membership",
    price: "89 SAR",
    color: "#414D55",
  },
  {
    text1: "Valid for one year",
    text2: "Examination of the clinic at a discounted price of 98 riyals",
    text3: "20% discount on dental services",
    header: "Golden Membership",
    price: "69 SAR",
    color: "#D39429",
  },
  {
    text1: "Valid for one year",
    text2: "Examination of the clinic at a discounted price of 110 riyals",
    text3: "10% discount on dental services",
    header: "Silver Membership",
    price: "42 SAR",
    color: "#C4C4C4",
  },
];

export const ListMember = () => {
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("../form", { replace: true });
  }

  return (
    <Container>
      {DATA.map((item) => (
        <Card key={item.header} {...item} />
      ))}
      <CPlaceholder
        onClick={handleNavigation}
        height="40px"
        width="199px"
        justify="center"
      >
        <TextTypo>Choose the membership</TextTypo>
      </CPlaceholder>
    </Container>
  );
};
