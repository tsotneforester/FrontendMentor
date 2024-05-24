import styled from "styled-components";
import { root } from "../styled";

export default function WhiteGradient() {
  return <S.Container></S.Container>;
}

const S = {};

S.Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
  background-color: ${root.color.white};
  height: ${root.gradient_height};
`;
