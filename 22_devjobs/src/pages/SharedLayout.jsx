import React from "react";
import styled from "styled-components";
import { device } from "../theme";
import logo from "../assets/logo.svg";
import logo1 from "../assets/mobile/bg-pattern-header.svg";
import { Outlet } from "react-router";
import ThemeToggler from "../components/ThemeToggler";

function SharedLayout({ theme, handler }) {
  return (
    <>
      <S.Header>
        <S.Logo src={logo} alt="" />
        <ThemeToggler theme={theme} handler={handler} />
      </S.Header>

      <Outlet />
    </>
  );
}

export default SharedLayout;

const S = {};

S.Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 145px;
  background-color: blue;
  padding: 50px clamp(20px, 10%, 50px);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url(${logo1});
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: auto 100%;
  @media ${device.mobilem} {
    background-size: 100% auto;
  }
  @media ${device.tablet} {
    border-bottom-left-radius: 80px;
    padding: 50px clamp(20px, 10%, 270px);
  }
`;

S.Logo = styled.img`
  //width: 30px;
`;
