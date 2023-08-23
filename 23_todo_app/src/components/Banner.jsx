import React from "react";

import styled from "styled-components";
import { device } from "../theme";

function Banner() {
  return <S.Banner></S.Banner>;
}

export default Banner;
let S = {};
S.Banner = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 225px;
  //border: 2px dotted red;
  background-color: ${(prop) => prop.theme.body};
  background-image: url(${(prop) => prop.theme.image});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: clamp(1440px, 100%, 1440px) 100%;
  transition: all ${root.time};

  @media ${device.desktop} {
    background-size: cover;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
