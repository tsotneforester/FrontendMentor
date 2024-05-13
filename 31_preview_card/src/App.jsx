import styled from "styled-components";
import { root } from "./styled";
import { Button, Price, Image } from "./components";

function App() {
  return (
    <S.Card>
      <Image />
      <S.Container>
        <S.Category>Perfume</S.Category>
        <S.ProductName>Gabrielle Essence Eau De Parfum</S.ProductName>
        <S.Description> A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL. </S.Description>
        <Price />
        <Button />
      </S.Container>
    </S.Card>
  );
}

export default App;

const S = {};
S.Card = styled.main`
  width: 100%;
  max-width: 380px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  background-color: ${root.color.white};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  animation: introFaqCard 0.4s ease-in-out;
  @media only screen and (min-width: ${root.media.tablet}px) {
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: stretch;
  }

  @keyframes introFaqCard {
    0% {
      opacity: 0;
      transform: translateY(-15%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

S.Container = styled.div`
  padding: 24px;
  @media only screen and (min-width: ${root.media.tablet}px) {
    padding: 32px;
  }
`;

S.Category = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 5px;
  color: ${root.color.blue};
`;

S.Description = styled.p`
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  color: ${root.color.blue};
  @media only screen and (min-width: ${root.media.tablet}px) {
    margin-top: 24px;
  }
`;

S.ProductName = styled.h1`
  margin-top: 12px;
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: ${root.color.dark_blue};
  @media only screen and (min-width: ${root.media.tablet}px) {
    margin-top: 20px;
  }
`;
