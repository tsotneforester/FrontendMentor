import styled from "styled-components";
import { root } from "../styled";

function Price() {
  return (
    <S.Container>
      <h1>$149.99</h1>
      <h2>$169.99</h2>
    </S.Container>
  );
}

export default Price;

const S = {};

S.Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 24px;
  gap: 20px;
  @media only screen and (min-width: ${root.media.tablet}px) {
    margin-top: 29px;
  }
  h1 {
    font-family: "Fraunces";
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: ${root.color.green};
  }

  h2 {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    text-decoration-line: line-through;
    color: ${root.color.blue};
  }
`;
