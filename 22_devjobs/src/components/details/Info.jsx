import React, { useContext } from "react";

import { ModalContext } from "../../Context";
import styled, { css } from "styled-components";
import { device, root } from "../../theme";

function Info({ id }) {
  const { data } = useContext(ModalContext);
  let activeCard = data.filter((item) => item.id == id)[0];
  let { position, postedAt, apply, contract, location, description, requirements, role } = activeCard;

  return (
    <Container>
      <div>
        <div>
          <div>
            <p>
              {postedAt} • {contract}
            </p>
            <h1>{position}</h1>
            <h3>{location}</h3>
          </div>
          <a href={apply} target="_blank">
            <button>Apply Now</button>
          </a>
        </div>
        <p>{description}</p>
        <h2>Requirements</h2>
        <p>{requirements.content}</p>
        <ul>
          {requirements.items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <h2>What You Will Do</h2>
        <p>{role.content}</p>
        <ol>
          {role.items.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    </Container>
  );
}

export default Info;

let Text = css`
  font-size: 16px;
  font-weight: 400;
  color: ${root.dark_grey};
  line-height: 28px;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 clamp(20px, 10%, 50px);
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 100%;
    max-width: ${root.max_width};
    padding: 32px;
    border-radius: ${root.br};
    background-color: ${(prop) => prop.theme.card_bg};
    transition: all ${root.time};
    & > div {
      @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
      }
      & button {
        width: 100%;
        background-color: ${root.violet};
        color: white;
        font-size: 16px;
        margin: 56px 0 42px 0;
        font-weight: 700;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: ${root.br};
        transition: all ${root.time};
        @media ${device.tablet} {
          width: 150px;
        }

        &:hover {
          background-color: ${root.light_violet};
        }
      }
    }

    & h1 {
      color: ${(prop) => prop.theme.card_position};
      font-size: 28px;
      font-weight: 700;
      margin-top: 16px;
    }
    & h2 {
      color: ${(prop) => prop.theme.card_position};
      font-size: 20px;
      font-weight: 700;
      margin: 20px 0 16px;
    }
    & h3 {
      font-size: 14px;
      font-weight: 700;
      color: ${root.violet};
      margin-top: 10px;
    }

    & p {
      ${Text}
    }

    & ul {
      ${Text}
      & li {
        list-style: disc;
        margin-left: 20px;
      }
    }
    & ol {
      ${Text}
      & li {
        margin-left: 20px;
        padding-left: 16px;
      }
      & li::marker {
        color: ${root.violet};
        font-size: 16px;
        font-weight: 600;
        content: counter(list-item);
      }
    }
  }
`;
