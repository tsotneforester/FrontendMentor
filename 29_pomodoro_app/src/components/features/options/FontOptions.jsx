import React from "react";
import styled from "styled-components";
import { root, circleHover, styledSettingTitle } from "../../../styled";
import { useDispatch, useSelector } from "react-redux";
import { setFont } from "./tempOptionsSlice";

let arr = Object.values(root.font);

export default function FontOptions() {
  const font = useSelector((state) => state.timer.font);
  const tempFont = useSelector((state) => state.tempOptions.font);
  const dispatcher = useDispatch();

  return (
    <S.Container>
      <S.Title font={font}>FONT</S.Title>
      <div className="circles">
        {arr.map((e, i) => {
          return (
            <S.Circle key={i} font={e} status={tempFont == e ? "active" : undefined} onClick={() => dispatcher(setFont(e))}>
              <span>Aa</span>
            </S.Circle>
          );
        })}
      </div>
    </S.Container>
  );
}

const S = {};

S.Title = styled.h1`
  ${styledSettingTitle}
  font-family: ${(props) => props.font};
`;

S.Container = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid #e3e1e1;
  @media only screen and (min-width: ${root.media.tablet}px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .circles {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 15px;
    color: white;
    font-size: 15px;
    font-weight: 700;
  }
`;
S.Circle = styled.div`
  ${circleHover}
  background-color: ${(prop) => (prop.status ? root.color.dark_blue : root.color.gray)};
  font-family: ${(prop) => prop.font};
  span {
    color: ${(prop) => (prop.status ? root.color.white : root.color.dark_blue)};
    opacity: ${(prop) => (prop.status ? 1 : 0.7)};

    /* font-family: ${root.font.kumbh}; */
  }
`;
