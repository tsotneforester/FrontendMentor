import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { setModalOpened } from "../TimerSlice";
import { useDispatch } from "react-redux";
import SettingsSVG from "../assets/icon-settings.svg?react";

export default function SettingsIcon() {
  const dispatcher = useDispatch();

  return <Icon onClick={() => dispatcher(setModalOpened())} />;
}

const Icon = styled(SettingsSVG)`
  margin-top: 79px;
  cursor: pointer;
  @media only screen and (min-width: ${root.media.tablet}px) {
    margin-top: 109px;
  }
  path {
    transition: all ${root.ms}s;
  }

  &:hover {
    path {
      opacity: 1;
    }
  }
`;
