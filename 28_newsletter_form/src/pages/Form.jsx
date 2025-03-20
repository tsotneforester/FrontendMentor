import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { p, h1, button } from '../styles/styles';
import Features from '../components/Features';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//🔰 https://freesound.org/

import useSound from 'use-sound';
import clickSound from '../assets/click.mp3';
import PageSound from '../assets/page.mp3';

export default function Form() {
  const [typing] = useSound(clickSound);
  const [turningPage] = useSound(PageSound);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isInputFocused, setIsInputFocused] = useState(false);

  const navigate = useNavigate();

  return (
    <S.Container>
      <div className="wallpaper">
        <img src="assets/illustration-sign-up-mobile.svg" alt="" />
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          reset();
          turningPage();
          navigate(
            {
              pathname: '/submitted',
              search: `?email=${data.email}`,
            },
            { state: { email: data.email } }
          );
        })}
      >
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <Features />

        <fieldset>
          <label htmlFor="">Email address</label>
          <span>{errors.email?.message}</span>

          <input
            {...register('email', {
              required: 'Email Address is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Valid email required',
              },
              onChange: typing,
            })}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            className={errors.email?.type ? 'alert' : ''}
            placeholder="email@company.com"
            type="text"
          />
        </fieldset>
        <button className={isInputFocused ? 'input-focused' : ''}>
          Subscribe to monthly newsletter
        </button>
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
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
    max-width: 608px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 36px;
    padding: 40px;
    gap: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    min-height: auto;
    max-width: 928px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 36px;
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'form wall';
    gap: 24px;
  }

  .wallpaper {
    width: 100%;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 360px;
      width: 100%;
      border-radius: 16px;
      background-image: url('assets/illustration-sign-up-mobile.svg');
      background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
      background-position: 0% 0%; // center/bottom/left/right/(%, px)
      background-attachment: scroll; //fixed / local
      background-size: cover; //length/cover/contain
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-area: wall;
      height: 593px;
      width: 40vw;
      max-width: 400px;
      min-width: 100px;
      border-radius: 16px;
      background-image: url('assets/illustration-sign-up-desktop.svg');
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
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
    max-width: ${({ theme }) => theme.max_width};
    padding: 0 24px 40px 24px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
      padding: 0;
      max-width: none;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
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
        'label error'
        'input input';
      label {
        grid-area: label;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        color: ${({ theme }) => theme.colors.dark_slate_grey};
      }

      input {
        grid-area: input;
        padding: 16px 24px;
        border: 1px solid rgba(25, 24, 43, 0.25);
        border-radius: 8px;
        font-size: 16px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.dark_slate_grey};
        &:active,
        &:focus {
          border-color: ${({ theme }) => theme.colors.dark_slate_grey};
        }

        &::placeholder {
          opacity: 0.5;
        }

        &.alert {
          background-color: ${({ theme }) => theme.colors.tomato_pale};
          border: 1px solid ${({ theme }) => theme.colors.tomato};
        }
      }

      span {
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        color: ${({ theme }) => theme.colors.tomato};
        grid-area: error;
        justify-self: flex-end;
      }
    }

    button {
      ${button}
      &.input-focused {
        @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
          background-color: ${({ theme }) => theme.colors.tomato};
        }
      }
    }
  }
`;
