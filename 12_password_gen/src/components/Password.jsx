import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { FaRegCopy } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import copy from "copy-to-clipboard";

export default function Password() {
  const [showCopy, setShowCopy] = useState(false);
  const refContainer = useRef(null);
  const password = useSelector((state) => state.password);

  function handler() {
    copy(refContainer.current.value);
    setShowCopy((prev) => !prev);
    setTimeout(() => setShowCopy((prev) => !prev), 1000);
  }

  return (
    <S.Container>
      <input readOnly={true} ref={refContainer} placeholder="P4$5W0rD!" value={password || ""} type="text" name="" id="" />
      <div className="copy">
        <span>{showCopy ? "COPIED" : " "}</span>
        <S.CopyIcon onClick={handler} size={28} />
      </div>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 0;
  background-color: ${root.color.light_black};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  cursor: text;
  padding: 20px;

  input {
    font-size: 24px;
    color: ${root.color.white};
    font-weight: 600;
    text-align: left;
    background-color: transparent;
    border: none;
    &::placeholder {
      color: ${root.color.placeholder_gray};
    }
  }

  .copy {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 6px;

    span {
      font-size: 18px;
      color: ${root.color.green};
      font-weight: 600;
      text-align: center;
    }
  }
`;

S.CopyIcon = styled(FaRegCopy)`
  color: ${root.color.green};
  width: 36px;
  cursor: pointer;
`;
