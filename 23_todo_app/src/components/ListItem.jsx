import React from "react";
import styled from "styled-components";
import { device, root } from "../theme";
import { ReactComponent as RemoveIcon } from "../assets/icon-cross.svg";
import { ReactComponent as CheckIcon } from "../assets/icon-check.svg";
import { ReactComponent as Emptyicon } from "../assets/empty.svg";

import { motion, AnimatePresence } from "framer-motion";

export const animations = {
  initial: { scale: 0, opacity: 0, x: -100 },
  animate: { scale: 1, opacity: 1, x: 0 },
  exit: { scale: 0, opacity: 0 },
  transition: { type: "spring", stiffness: 900, damping: 40 },
};

function ListItem({ data, tempData, dataSetter }) {
  function removeHandler(id) {
    console.log("remove - x");
    console.log(id);
    let foo = [...data];

    dataSetter(foo.filter((itm) => itm.id != id));
  }

  function completeHandler(ind) {
    let foo = [...data];
    if (foo[ind].status == "completed") {
      foo[ind].status = "active";
    } else {
      foo[ind].status = "completed";
    }
    console.log("removes");
    dataSetter(foo);
  }

  if (tempData.length > 0) {
    return (
      <AnimatePresence initial={false} mode="sync">
        {tempData.map((task, ind) => {
          return (
            <S.ListItem initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} effect={task.status} key={task.id}>
              <span className={task.status} onClick={() => completeHandler(ind)}>
                {task.status == "completed" ? <CheckIcon /> : ""}
              </span>
              <h1>{task.task}</h1>
              <Remove onClick={() => removeHandler(task.id)} />
            </S.ListItem>
          );
        })}
      </AnimatePresence>
    );
  } else {
    return (
      <Empty>
        <Emptyicon />
        <h1>No todos yet</h1>
      </Empty>
    );
  }
}

export default ListItem;

let S = {};
const Remove = styled(RemoveIcon)`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

S.ListItem = styled(motion.div)`
  width: 100%;
  max-width: ${root.maxWidth};
  overflow: hidden;
  background-color: ${(prop) => prop.theme.formBg};
  padding: 16px 12px;
  border-radius: ${root.br};
  transition: all ${root.time};
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: ${root.formGap};
  border-bottom: 1px solid ${(prop) => prop.theme.checkBoxBorder};
  //display: ${(prop) => (prop.effect == "completed" ? "none" : "flex")};

  & span {
    width: 25px;
    height: 25px;
    border: 1px solid ${(prop) => prop.theme.checkBoxBorder};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .completed {
    background: ${root.gradient};
  }

  & h1 {
    font-size: 16px;
    color: ${(prop) => (prop.effect == "completed" ? prop.theme.checked : prop.theme.text)};
    flex-grow: 1;
    text-decoration: ${(prop) => (prop.effect == "completed" ? "line-through" : "none")};
  }
`;

const Empty = styled.div`
  padding: 30px 5px;
  width: 100%;
  height: 430px;
  max-width: ${root.maxWidth};
  background-color: ${(prop) => prop.theme.formBg};
  border-top-left-radius: ${root.br};
  border-top-right-radius: ${root.br};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all ${root.time};

  & svg {
    width: clamp(100px, 90%, 350px);
    height: 300px;
  }

  & h1 {
    color: ${(prop) => prop.theme.text};
  }
`;
