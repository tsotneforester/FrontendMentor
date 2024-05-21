import { useState } from "react";
import styled from "styled-components";
import { root } from "./styled";

//imrse
//rafce

//rfc
//imrr

function App() {
  const [error, setError] = useState("hi");
  return (
    <>
      <S.Logo>
        <img src="/assets/logo.svg" alt="" />
      </S.Logo>
      <S.Avatar />
      <S.Main>
        <h1>We're</h1>
        <h2>Coming Soon</h2>
        <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

        <S.Form>
          <fieldset>
            <input placeholder="Email Address" type="text" />
            {error && <img className="error-icon" src="/assets/icon-error.svg" alt="" />}
            <button>
              <img src="/assets/icon-arrow.svg" alt="" />
            </button>
          </fieldset>

          <p className="error">Please provide a valid email</p>
        </S.Form>
      </S.Main>
    </>
  );
}

export default App;

const S = {};

S.Def = styled.div``;

S.Logo = styled.div`
  width: 100%;
  width: auto;
  height: 84px;
  border-radius: 0;
  background-color: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: ${root.padding_mobile};
  @media only screen and (min-width: ${root.media.tablet}px) {
    grid-area: logo;
    height: auto;
    padding: ${root.padding_tablet};
    padding-top: 75px;
  }
`;

S.Avatar = styled.div`
  height: clamp(250px, 75vw, 400px);
  object-fit: cover;
  object-position: 0 0;

  background-image: url("/assets/hero-mobile.jpg");
  background-position: 0% 0%; // center/bottom/left/right/(%, px)
  background-attachment: scroll; //fixed / local
  background-size: cover; //length/cover/contain

  @media only screen and (min-width: ${root.media.tablet}px) {
    grid-area: avatar;
    height: 100vh;
    background-image: url("/assets/hero-desktop.jpg");
  }
`;

S.Main = styled.main`
  padding: ${root.padding_mobile};
  margin-top: 64px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: ${root.media.tablet}px) {
    grid-area: main;
    padding: ${root.padding_tablet};
    margin-top: 136px;
    align-items: stretch;
    max-width: 900px;
  }

  @media only screen and (min-width: ${root.media.desktop}px) {
    max-width: 1200px;
  }

  h1,
  h2 {
    text-transform: uppercase;
  }

  h1 {
    font-weight: 300;
    font-size: 40px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 10.8px;
    color: ${root.color.pink};

    @media only screen and (min-width: ${root.media.tablet}px) {
      width: 100%;
      font-size: 64px;
      line-height: 64px;
      letter-spacing: 17px;
      text-align: left;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 10.8254px;
    color: ${root.color.dark_red};
    @media only screen and (min-width: ${root.media.tablet}px) {
      font-size: 64px;
      line-height: 71px;
      letter-spacing: 17px;
      text-align: left;
    }
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: ${root.color.pink};
    @media only screen and (min-width: ${root.media.tablet}px) {
      margin-top: 32px;
      font-size: 16px;
      line-height: 28px;
      text-align: left;
    }
  }
`;
S.Form = styled.form`
  width: 100%;
  margin-top: 32px;

  @media only screen and (min-width: ${root.media.tablet}px) {
    margin-top: 40px;
  }

  fieldset {
    position: relative;
    border: none;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    /* align-items: center; */

    border: 1px solid #ce9898;
    border-radius: 28px;
  }

  input {
    width: 100%;
    font-size: 14px;
    line-height: 28px;
    color: #423a3a;
    padding: 11px 24px;
    border: none;
    background-color: transparent;
    &::placeholder {
      color: #ce9898;
    }
  }
  .error-icon {
    align-self: center;
    margin: 0 8px;
    flex-shrink: 0;
  }
  button {
    /* position: absolute;
    right: 0%;
    top: 0%; */
    width: 98px;

    background: ${root.color.gradient2};
    box-shadow: 0px 15px 20px rgba(198, 110, 110, 0.247569);
    border-radius: 28px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #ffc3c3;
    }
  }

  .error {
    font-size: 13px;
    line-height: 13px;
    color: #f96464;
    padding-left: 24px;
    margin-top: 8px;
    text-align: left;
  }
`;
