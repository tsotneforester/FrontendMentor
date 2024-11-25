import React from 'react';
import Logo from '../assets/io.svg?react';
import Facebook from '../assets/icon-facebook.svg?react';
import Instagram from '../assets/icon-instagram.svg?react';
import Twitter from '../assets/icon-twitter.svg?react';
import styled from 'styled-components';
import { root } from '../styled';

export default function Footer({ isLight }) {
  return (
    <S.Footer bg={isLight}>
      <Logo />
      <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
      <S.Social>
        <Facebook />
        <Instagram />
        <Twitter />
      </S.Social>
    </S.Footer>
  );
}

const S = {};
S.Footer = styled.footer`
  width: 100%;
  border-radius: 0;
  background-color: ${root.color.orange};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 38px;
  padding: 48px 32px;
  background-color: ${props => (props.bg ? root.color.orange : root.color.black)};

  @media only screen and (min-width: ${root.media.tablet}) {
    flex-direction: row;
    padding: 56px 39px;
  }
  @media only screen and (min-width: ${root.media.desktop}) {
    padding: 80px 165px;
  }

  &.light {
    background-color: $orange;
    path {
      fill: ${root.color.black};
    }

    p {
      font-size: 16px;
      color: ${root.color.black};
      font-weight: 300;
      text-align: left;
    }
  }

  p {
    font-size: 16px;
    color: ${root.color.white};
    font-weight: 300;
    text-align: left;
    font-family: 'Outfit', sans-serif;
    line-height: 26px;
    max-width: 315px;
    @media only screen and (min-width: ${root.media.tablet}) {
      max-width: 285px;
    }
    @media only screen and (min-width: ${root.media.desktop}) {
      max-width: 430px;
    }
  }
`;

S.Social = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 22px;

  img:hover {
    filter: brightness(0) saturate(100%) invert(70%) sepia(35%) saturate(553%) hue-rotate(338deg) brightness(88%) contrast(89%);
    cursor: pointer;
  }
`;
