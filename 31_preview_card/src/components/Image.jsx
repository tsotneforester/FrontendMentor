import styled from "styled-components";
import { root } from "../styled";

function Image() {
  return (
    <S.Container role="image">
      <img src="/assets/image-product-mobile.jpg" alt="product" />
    </S.Container>
  );
}

export default Image;

const S = {};

S.Container = styled.div`
  width: 100%;
  overflow: hidden;

  @media only screen and (min-width: ${root.media.tablet}px) {
    height: 100%;
    width: 100%;
    background-image: url("/assets/image-product-desktop.jpg");
    background-size: 300px 100%;
  }

  img {
    @media only screen and (min-width: ${root.media.tablet}px) {
      height: 100%;
      width: auto;
      display: none;
    }
  }
`;
