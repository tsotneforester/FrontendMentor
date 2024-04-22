import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { setModalOpened } from "../store";
import { useDispatch, useSelector } from "react-redux";
import SettingsSVG from "../assets/icon-settings.svg?react";

export default function Settings() {
  const data = useSelector((state) => state.data);
  const dispatcher = useDispatch();

  function handler() {
    dispatcher(setModalOpened());
  }

  return <SettingsIcon onClick={handler} />;
}

const SettingsIcon = styled(SettingsSVG)`
  cursor: pointer;
  path {
    transition: all 0.5s;
  }

  &:hover {
    path {
      opacity: 1;
    }
  }
`;
