import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  max_width_s: "460px",
  max_width_l: "540px",
  color: {
    red: "hsl(0, 100%, 74%)",
    green: "hsl(154, 59%, 51%)",
    light_green: "#77e2b3",
    blue: "hsl(248, 32%, 49%)",
    dark_blue: "hsl(249, 10%, 26%)",
    grayish_blue: "hsl(246, 25%, 77%)",
    white: "#fff",
    border: "#dedede",
  },
  media: {
    mobile: "768px",
  },
  time: "1s",
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${root.color.red};
  background-image: url("images/bg-intro-mobile.png");
  background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
  background-position: top left; // center/bottom/left/right/(%, px)
  background-size: cover; //length/cover/containbg-sidebar-mobile


  @media only screen and (min-width: ${root.media.mobile}) {
    background-image: url("images/bg-intro-desktop.png");
  }
}

#root {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 88px 24px;
  @media only screen and (min-width: ${root.media.mobile}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 45px;
    padding:0 30px;
  }

}


`;

export const S = {};
S.Main = styled.main`
  margin-top: 64px;
  @media only screen and (min-width: ${root.media.mobile}) {
    max-width: ${root.max_width_l};
    margin: 0;
    flex-grow: 1;
  }

  form {
    width: 100%;
    max-width: ${root.max_width_s};
    max-width: ${root.color.max_width_s};
    padding: 24px;
    border-radius: 10px;
    background: ${root.color.white};
    box-shadow: 0px 8px rgba(0, 0, 0, 0.15);
    margin-top: 24px;
    @media only screen and (min-width: ${root.media.mobile}) {
      max-width: ${root.max_width_l};
      padding: 40px;
    }

    fieldset {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      border: none;
      margin-bottom: 16px;
      .input {
        width: 100%;
        border-radius: 5px;
        border: 1px solid ${root.color.border};
        background: ${root.color.white};
        padding: 15px 27px 15px 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;

        &.alert {
          border: 1px solid ${root.color.red};
        }

        input {
          flex-grow: 1;
          opacity: 1;
          color: ${root.color.dark_blue};
          font-size: 14px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0.25px;
          border: none;

          &::placeholder {
            opacity: 0.75;
          }

          &.alert {
            color: ${root.color.red};

            &::placeholder {
              opacity: 0.75;
              color: ${root.color.red};
            }
          }
        }
      }

      p {
        color: ${root.color.red};
        align-self: flex-end;
        font-size: 11px;
        font-style: italic;
        font-weight: 500;
        text-align: right;
      }
    }

    button {
      width: 100%;
      border-radius: 5px;
      background: ${root.color.green};
      box-shadow: inset 0px -4px rgba(0, 0, 0, 0.09);
      padding: 15px 20px;
      color: ${root.color.white};
      font-size: 15px;
      font-weight: 600;
      line-height: 26px;
      text-align: center;
      letter-spacing: 1px;
      margin-bottom: 8px;
      transition: background ${root.time};
      &:hover {
        background: ${root.color.light_green};
        box-shadow: inset 0px -4px rgba(0, 0, 0, 0.09);
      }
    }

    p {
      color: ${root.color.grayish_blue};
      font-size: 11px;
      font-weight: 500;
      line-height: 21px;
      text-align: center;
      span {
        color: ${root.color.red};
        font-size: 11px;
        font-weight: 700;
        line-height: 21px;
        text-align: center;
      }
    }
  }
`;
