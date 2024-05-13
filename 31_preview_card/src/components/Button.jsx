import styled from "styled-components";
import { root } from "../styled";

function Button() {
  return (
    <S.Container>
      <img src="/assets/icon-cart.svg" alt="" />
      <p>Add to Cart</p>
    </S.Container>
  );
}

export default Button;

const S = {};

S.Container = styled.div`
  width: 100%;
  padding: 18px 12px;
  border-radius: 8px;
  margin-top: 20px;
  background: ${root.color.green};
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  transition: background-color ${root.animation_time}ms;
  cursor: pointer;
  @media only screen and (min-width: ${root.media.tablet}px) {
    margin-top: 30px;
  }
  &:hover {
    background: ${root.color.dark_green};
  }

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${root.color.white};
  }
`;
