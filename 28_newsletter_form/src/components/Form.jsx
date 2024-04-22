import React, { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { DataContext } from "../Context";
import { root, p, h1, button } from "../styled";
import Features from "./Features";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setFormSubmitted, setEmail } = useContext(DataContext);

  return (
    <S.Container>
      <div className="wallpaper">
        <img src="assets/illustration-sign-up-mobile.svg" alt="" />
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          setFormSubmitted(true);
          setEmail(data.email);
        })}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <Features />

        <fieldset>
          <label htmlFor="">Email address</label>
          <span>{errors.email?.message}</span>

          <input
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Valid email required",
              },
            })}
            className={errors.email?.type ? "alert" : ""}
            placeholder="email@company.com"
            type="text"
          />
        </fieldset>
        <button>Subscribe to monthly newsletter</button>
      </form>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: ${root.media}) {
    width: 100%;
    min-height: auto;
    max-width: 928px;
    background-color: ${root.color.white};
    border-radius: 36px;
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: "form wall";
    gap: 24px;
  }

  .wallpaper {
    width: 100%;
    @media only screen and (min-width: ${root.media}) {
      grid-area: wall;
      height: 593px;
      width: 40vw;
      max-width: 400px;
      min-width: 100px;
      border-radius: 16px;
      background-image: url("assets/illustration-sign-up-desktop.svg");
      background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
      background-position: 0% 0%; // center/bottom/left/right/(%, px)
      background-attachment: scroll; //fixed / local
      background-size: cover; //length/cover/contain
      justify-self: flex-end;
    }
    img {
      width: 100%;
      max-height: 284px;
      object-fit: cover;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;

      @media only screen and (min-width: ${root.media}) {
        width: 100%;
        height: 100%;
        border: 2px solid green;
        border-radius: 20px;
        display: none;
      }
    }
  }

  form {
    width: 100%;
    max-width: ${root.max_width};
    padding: 0 24px 40px 24px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    @media only screen and (min-width: ${root.media}) {
      grid-area: form;
      padding: 0;
      max-width: 376px;
      justify-self: center;
    }

    h1 {
      ${h1}
    }

    p {
      ${p}
    }

    fieldset {
      margin: 40px 0 24px 0;
      border: none;
      gap: 8px;
      display: grid;
      grid-template-areas:
        "label error"
        "input input";
      label {
        grid-area: label;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        color: ${root.color.dark_slate_grey};
      }

      input {
        grid-area: input;
        padding: 16px 24px;
        border: 1px solid rgba(25, 24, 43, 0.25);
        border-radius: 8px;
        font-size: 16px;
        line-height: 24px;
        color: ${root.color.dark_slate_grey};
        &:active,
        &:focus {
          border-color: ${root.color.dark_slate_grey};
        }

        &::placeholder {
          opacity: 0.5;
        }

        &.alert {
          background-color: ${root.color.tomato_pale};
          border: 1px solid ${root.color.tomato};
        }
      }

      span {
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        color: ${root.color.tomato};
        grid-area: error;
        justify-self: flex-end;
      }
    }

    button {
      ${button}
    }
  }
`;
