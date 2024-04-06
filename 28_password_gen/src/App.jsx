import React from "react";
import styled from "styled-components";
import { root } from "./styled";

import Heading from "./components/Heading";
import Password from "./components/Password";
import Strength from "./components/Strength";
import Generate from "./components/Generate";
import CheckBoxes from "./components/CheckBoxes";
import Slider from "./components/Slider";
import Length from "./components/Length";

function App() {
  return (
    <>
      <Heading />
      <Password />
      <S.Options>
        <Length />
        <Slider />
        <CheckBoxes />
        <Strength />
        <Generate />
      </S.Options>
    </>
  );
}

export default App;

const S = {};

S.Options = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 0;
  background-color: ${root.color.light_black};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  cursor: text;
  padding: 20px;
`;
