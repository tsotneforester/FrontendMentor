import { Card } from "./Card";
import { Header } from "./Header";
import styled from "styled-components";
import { root } from "./styled";
import { data } from "./data";

function App() {
  return (
    <>
      <Header />
      <S.Main>
        <Card data={data} />
      </S.Main>
    </>
  );
}

export default App;

let S = {};

S.Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media only screen and (min-width: ${root.media.desktop}) {
    display: grid;
    grid-template-areas:
      "left top right"
      "left down right";
    -moz-column-gap: 30px;
    column-gap: 30px;
    row-gap: 30px;
  }
`;
