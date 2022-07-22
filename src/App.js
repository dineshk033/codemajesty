import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/homepage";
import MemberShip from "./components/membership";
import { KYC } from "./components/membership/KYC";
import PhoneNumber from "./components/phoneNumber";
import { PhoneNo } from "./components/phoneNumber/phoneNo";
import Verify from "./components/verify";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${(props) => props.colr};
`;

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Container colr={pathname === "/" ? "#4D7CF3" : "#ffffff"}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/phone" element={<PhoneNumber />}>
            <Route index element={<PhoneNo />} />
            <Route path="verify" element={<Verify />} />
          </Route>
          <Route path="/member" element={<MemberShip />}>
            <Route index element={<KYC />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
