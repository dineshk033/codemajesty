import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: fit-content;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const TextTypo = styled.div`
  font-weight: 400;
  font-size: 14px;

  text-align: center;

  color: #4d7cf3;
`;
export const TextTypo1 = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: 16px;

  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const TextTypo2 = styled.div`
  font-weight: 400;
  text-align: left;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
export const CardEffect = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  border-radius: 20px;
  border: 3px solid #414d55;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const CardEffect1 = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  border-radius: 20px;
  border: 3px solid;
  border-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
