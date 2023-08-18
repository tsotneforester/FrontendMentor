import React, { useContext } from "react";

import { ModalContext } from "../../Context";
import styled, { css } from "styled-components";
import { device, root } from "../../theme";

function Header({ id }) {
  const { data } = useContext(ModalContext);
  let activeCard = data.filter((item) => item.id == id)[0];
  let { logoBackground: color, company, website } = activeCard;

  console.log(activeCard);
  return (
    <S.Header>
      <div>
        <Icon bg={color}>
          <img src={`./logos/${company.toLowerCase()}.svg`} alt="" />
        </Icon>
        <nav>
          <main>
            <h1>{company}</h1>
            <h2>{website}</h2>
          </main>
          <a href={website} target="_blank">
            <button>Company Site</button>
          </a>
        </nav>
      </div>
    </S.Header>
  );
}

export default Header;
const S = {};
S.Header = styled.header`
  width: 100%;
  padding: 0 clamp(20px, 10%, 50px);

  & > div {
    position: relative;
    //width: 100%;
    max-width: ${root.max_width};
    //height: 230px;
    border-radius: ${root.br};
    background-color: ${(prop) => prop.theme.card_bg};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ${root.time};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
  }

  & nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    row-gap: 28px;
    margin-top: 30px;
    @media ${device.tablet} {
      margin-top: 0;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }

    & main {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 10px;

      @media ${device.tablet} {
        justify-content: flex-start;
        align-items: flex-start;
      }

      & h1 {
        color: ${(prop) => prop.theme.card_position};
        font-size: 24px;
        font-weight: 700;
      }
      & h2 {
        font-size: 16px;
        font-weight: 400;
        color: ${root.dark_grey};
        //line-height: 28px;
      }
    }

    & button {
      padding: 14px 18px;
      font-size: 16px;
      font-weight: 700;
      background-color: ${(prop) => prop.theme.button_bg};
      color: ${(prop) => prop.theme.button_color};
      transition: all ${root.time};
      border-radius: ${root.br};
    }

    & button:hover {
      background-color: ${(prop) => prop.theme.button_bg_hover};
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${root.br};
  background-color: ${(prop) => prop.bg};

  @media ${device.tablet} {
    position: relative;
    top: 0;
    left: 0;
    width: 140px;
    height: 140px;
    transform: translateX(0);
    flex-shrink: 0;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
  }

  & img {
    width: 70px;
  }
`;
