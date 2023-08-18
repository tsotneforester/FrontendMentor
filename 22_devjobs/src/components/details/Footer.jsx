import React, { useContext } from "react";
import { ModalContext } from "../../Context";
import styled, { css } from "styled-components";
import { device, root } from "../../theme";

function Footer({ id }) {
  const { data } = useContext(ModalContext);
  let activeCard = data.filter((item) => item.id == id)[0];
  let { position, company, apply } = activeCard;
  return (
    <Container>
      <div>
        <main>
          <h1>{position}</h1>
          <h2>{company}</h2>
        </main>
        <a href={apply} target="_blank">
          <button>Apply Now</button>
        </a>
      </div>
    </Container>
  );
}
export default Footer;

const Container = styled.footer`
  /* position: absolute;
  bottom: 0; */
  width: 100%;
  height: 120px;
  background-color: ${(prop) => prop.theme.card_bg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  & > div {
    max-width: ${root.max_width};
    width: 100%;
    margin: 0 clamp(20px, 10%, 50px);
    @media ${device.tablet} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
  }

  & div main {
    display: none;
    @media ${device.tablet} {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
    }

    & h1 {
      font-size: 20px;
      font-weight: 700;
      color: ${(prop) => prop.theme.card_position};
    }

    & h2 {
      font-size: 16px;
      font-weight: 400;
      color: ${root.dark_grey};
      line-height: 28px;
    }
  }

  & div button {
    width: 100%;
    background-color: ${root.violet};
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${root.br};
    transition: all ${root.time};
    @media ${device.tablet} {
      width: 130px;
    }

    &:hover {
      background-color: ${root.light_violet};
    }
  }
`;
