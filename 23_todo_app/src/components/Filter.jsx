import React from "react";

import styled from "styled-components";
import { device, root } from "../theme";

function Filter({ data, clearSetter, filterSetter, dataSetter, filterKey, setFilterKey }) {
  let itemsLeft = data.filter((item) => item.status == "active");

  function clearHandler() {
    let itemsLeft = data.filter((item) => item.status == "active");
    clearSetter(itemsLeft);
  }

  function allHandler() {
    setFilterKey("all");
    dataSetter(data);
    filterSetter(data);
  }

  function activeHandler() {
    setFilterKey("active");
    let activeItems = data.filter((item) => item.status == "active");
    filterSetter(activeItems);
  }

  function completedHandler() {
    console.log("completred toggled");
    setFilterKey("completed");
    let completedItems = data.filter((item) => item.status != "active");
    filterSetter(completedItems);
  }

  return (
    <S.Filter>
      <span className="item1">{itemsLeft.length} items left</span>
      <div className="item2">
        <span className={filterKey == "all" ? "active" : ""} onClick={allHandler}>
          All
        </span>
        <span className={filterKey == "active" ? "active" : ""} onClick={activeHandler}>
          Active
        </span>
        <span className={filterKey == "completed" ? "active" : ""} onClick={completedHandler}>
          Completed
        </span>
      </div>

      <span className="item3" onClick={clearHandler}>
        Clear Completed
      </span>
    </S.Filter>
  );
}

export default Filter;

let S = {};
S.Filter = styled.form`
  width: 100%;
  max-width: ${root.maxWidth};
  border-bottom-left-radius: ${root.br};
  border-bottom-right-radius: ${root.br};
  transition: all ${root.time};
  display: grid;
  grid-template-areas:
    "left clear"
    "filter filter";
  row-gap: 30px;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    gap: 0;
  }

  .item1 {
    grid-area: left;
    background-color: ${(prop) => prop.theme.formBg};
    max-width: ${root.maxWidth};
    padding: 16px 12px;
    border: ${root.br};
    line-height: 32px;
    transition: background-color ${root.time};
  }
  .item2 {
    grid-area: filter;
    background-color: ${(prop) => prop.theme.formBg};
    max-width: ${root.maxWidth};
    padding: 16px 12px;
    border: ${root.br};
    display: flex;
    justify-content: center;
    gap: 10px;
    line-height: 32px;
    transition: background-color ${root.time};
    @media ${device.tablet} {
      flex-grow: 1;
    }
  }
  .item3 {
    grid-area: clear;
    background-color: ${(prop) => prop.theme.formBg};
    max-width: ${root.maxWidth};
    padding: 16px 12px;
    border: ${root.br};
    align-self: flex-end;
    text-align: right;
    line-height: 32px;
    transition: background-color ${root.time};
  }

  & span {
    color: ${root.filter};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  .active {
    color: ${root.blue};
  }
`;
