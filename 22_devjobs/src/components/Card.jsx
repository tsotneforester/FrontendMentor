import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { root } from "../theme";
import { device } from "../theme";

import styled from "styled-components";

function Card({ data }) {
  return data.map((item) => {
    let { id, company, location, position, postedAt, contract, logoBackground: color } = item;
    return (
      <Article key={id}>
        <Icon bg={color}>
          <img src={`./src/assets/logos/${company.toLowerCase()}.png`} alt="" />
        </Icon>

        <FlexLine1>
          <Contract>
            {postedAt} • {contract}
          </Contract>
          <Position to={`/${id}`}>{position}</Position>
          <Company>{company}</Company>
        </FlexLine1>

        <Country>{location}</Country>
      </Article>
    );
  });
}

export default Card;

const S = {};

const Article = styled.article`
  width: 100%;
  height: 240px;
  padding: 28px;
  border-radius: ${root.br};
  background-color: ${(prop) => prop.theme.card_bg};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  @media ${device.tablet} {
    max-width: calc(50% - 10px);
  }
  @media ${device.desktop} {
    max-width: calc(33% - 10px);
  }
`;

const Icon = styled.div`
  position: absolute;
  top: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(prop) => prop.bg};
`;

const FlexLine1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  margin-top: 28px;
`;

const Contract = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${root.dark_grey};
`;

const Position = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: ${(prop) => prop.theme.card_position};
  text-decoration: none;
`;

const Company = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${root.dark_grey};
`;

const Country = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${root.violet};
`;
