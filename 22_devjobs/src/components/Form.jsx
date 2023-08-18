import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { BiSearch } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { ModalContext } from "../Context";
import { device, root } from "../theme";
import pinIcon from "../assets/pin.svg";
import searchIcon from "../assets/search.svg";

function Form({ handler, refContainer, modalHandler }) {
  const { showModal, setShowModal, filter, setFilter, fields, setFields } = useContext(ModalContext);

  function modalHandler() {
    setShowModal(!showModal);
  }

  function han1(e) {
    console.log(e.target.value);
    setFields({ ...fields, position: e.target.value, company: e.target.value });
  }

  function han2(e) {
    setFields({ ...fields, location: e.target.value });
  }

  function han3(e) {
    console.log("object");
    setFields({ ...fields, contract: e.target.checked ? "full time" : "" });
  }

  return (
    <S.Main>
      <S.Form action="" ref={refContainer}>
        <img src={searchIcon} alt="" />
        <S.Input type="text" value={fields.position} onChange={han1} placeholder="Filter by title..." />
        <S.Modal show={showModal}>
          <S.Location>
            <img src={pinIcon} alt="" />
            <input type="text" value={fields.location} onChange={han2} placeholder="Filter by location..." />
          </S.Location>
          <S.Check>
            <input type="checkbox" id="check" onChange={han3} checked={fields.contract == "full time" ? true : false} />
            <label htmlFor="check">Full Time</label>
          </S.Check>
          <S.Button>
            <button onClick={handler}>Search</button>
          </S.Button>
        </S.Modal>
        <Filter onClick={modalHandler}> {<FaFilter />} </Filter>
        <OnScreenSubmit onClick={handler}>
          <span>{<BiSearch />}</span>
          <span>Search</span>
        </OnScreenSubmit>
      </S.Form>
    </S.Main>
  );
}

export default Form;

const S = {};

S.Main = styled.main`
  border-radius: ${root.br};
  width: 100%;
  background-color: ${(prop) => prop.theme.card_bg};
  transition: all ${root.time};
  padding: 20px;
  @media ${device.tablet} {
    padding: 0;
    display: flex;
    justify-content: stretch;
    align-items: center;
  }
`;

const Filter = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  color: gray;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media ${device.tablet} {
    display: none;
  }
`;

S.Form = styled.form`
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 10px;
  width: 100%;
  @media ${device.tablet} {
    gap: 0;
    justify-content: flex-start;
    align-items: center;
    padding: 14px;
  }
`;

S.Input = styled.input`
  background-color: transparent;
  width: 100%;
  text-indent: 10px;
  font-size: 15px;
  border: none;
  color: ${(prop) => prop.theme.card_position};
  //border: 1px red solid;
  @media ${device.tablet} {
    width: auto;
    flex-grow: 1;
    border-right: 1px ${root.seperator} solid;
  }
`;

S.Modal = styled.div`
  position: fixed;
  top: 50%;
  left: clamp(20px, 10%, 50px);
  transform: translate(0, -50%);
  width: calc(100% - 2 * clamp(20px, 10%, 50px));
  height: auto;
  z-index: 82;
  display: ${(prop) => (prop.show ? "flex" : "none")};
  background-color: ${(prop) => prop.theme.card_bg};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: ${root.br};
  @media ${device.tablet} {
    position: static;
    display: flex;
    left: none;
    width: auto;
    transform: translate(0);
    background-color: transparent;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    /* border: 2px green dotted; */
    flex-grow: 1;
    gap: 10px;
  }
`;

S.Location = styled.div`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${root.seperator};
  padding: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: transparent;
  @media ${device.tablet} {
    /* border: 1px dotted red; */
    padding: 10px;
    width: auto;
    height: auto;
    flex-grow: 1;
    border-right: 1px ${root.seperator} solid;
    border-bottom: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    font-size: 16px;
  }

  & input {
    border: none;
    background-color: transparent;
    color: ${(prop) => prop.theme.card_position};
  }
`;

S.Check = styled.div`
  width: 100%;
  border: none;
  //border-bottom: 2px solid ${root.seperator};
  padding: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media ${device.tablet} {
    width: 156px;
    border: none;
    height: 100%;
    padding: 0px;
  }

  & label {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    color: ${(prop) => prop.theme.card_position};
    /* border: 1px dotted red; */
  }
  & input {
    //appearance: none;
    background-color: ${(prop) => prop.theme.checkbox};
    content: "\f00c";
    font-size: 15px;
    color: yellow;
    border: none;
    outline: none;
    width: 28px;
    height: 28px;
    transition: all ${root.time};
  }

  & input:hover {
    background-color: red;
    outline: none;
  }
`;

S.Button = styled.div`
  padding: 22px;
  width: 100%;

  @media ${device.tablet} {
    display: none;
  }

  & button {
    width: 100%;
    border-radius: ${root.br};
    background-color: ${root.violet};
    padding: 12px 36px;
    color: white;
    font-weight: 600;
    font-size: 16px;
  }
`;

S.Grid = styled.div`
  margin-top: 30px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const OnScreenSubmit = styled.button`
  width: 50px;
  height: auto;
  border-radius: ${root.br};
  background-color: ${root.violet};
  color: white;
  font-weight: bold;
  font-size: 24px;
  flex-shrink: 0;
  padding: 8px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 10px;
  @media ${device.tablet} {
    width: auto;
    /* margin: 16px; */
    padding: 16px 36px;
  }

  & span:nth-child(2) {
    display: none;
    font-size: 16px;
    font-weight: 700;
    @media ${device.tablet} {
      display: inline;
    }
  }

  & span:nth-child(1) {
    display: inline;
    @media ${device.tablet} {
      display: none;
    }
  }
`;
