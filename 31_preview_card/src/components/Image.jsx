import styled from "styled-components";
import { root } from "../styled";

function Image() {
  return (
    <S.Container>
      <img src="/assets/image-product-mobile.jpg" alt="product" />
    </S.Container>
  );
}

export default Image;

const S = {};

S.Container = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    content: url("/assets/image-product-mobile.jpg");
    @media only screen and (min-width: ${root.media.tablet}px) {
      content: url("/assets/image-product-desktop.jpg");
      height: 100%;
    }
  }
`;
