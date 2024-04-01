import { useSelector } from "react-redux";
import styled from "styled-components";

import { StepProgress, PersonalForm, ThankYou, PlanForm, Summery, AddOnForm, WhiteGradient } from "./components";
import { root } from "./Styled";

function App() {
  let step = useSelector((state) => state.app.step);
  let status = useSelector((state) => state.app.status);
  return (
    <>
      <S.Main>
        <StepProgress />
        <div className="option">
          {status == "active" && (
            <>
              {step == 1 && <PersonalForm />}
              {step == 2 && <PlanForm />}
              {step == 3 && <AddOnForm />}
              {step == 4 && <Summery />}
            </>
          )}
          {status == "active" && <WhiteGradient />}
          {status == "finished" && <ThankYou />}
        </div>
      </S.Main>
    </>
  );
}

export default App;

const S = {};

S.Main = styled.main`
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: ${root.media}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    min-height: initial;
    height: 608px;
    background-image: none;
    background-color: ${root.color.white};
    padding: 20px;
    border-radius: 20px;
    width: 100%;
    max-width: 870px;
    margin: 30px;
  }

  .option {
    width: 100%;
    flex-grow: 1;
    border-radius: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: ${root.media}) {
      width: auto;
      position: relative;
      padding: 0;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
