import styled from 'styled-components';
import Logo1 from '../assets/client-databiz.svg';
import Logo2 from '../assets/client-audiophile.svg';
import Logo4 from '../assets/client-maker.svg';
import Logo3 from '../assets/client-meet.svg';
import hero1 from '../assets/image-hero-mobile.png';
import hero2 from '../assets/image-hero-desktop.png';

export default function Home() {
  return (
    <S.Container>
      <S.Image>
        <img src={hero1} />
        <img src={hero2} />
      </S.Image>

      <S.Desc>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
      </S.Desc>
      <S.Logoes>
        <img src={Logo1} />
        <img src={Logo2} />
        <img src={Logo4} />
        <img src={Logo3} />
      </S.Logoes>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-areas:
      'desc img'
      'logoes img';
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 90px;
    padding: 20px 130px;
    column-gap: clamp(30px, 12vw, 125px);
    max-width: 1440px;
  }
`;

S.Image = styled.div`
  margin-top: 8px;

  & img:first-child {
    max-width: 480px;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }
  & img:last-child {
    display: none;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: block;
      max-width: 480px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: img;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
`;
S.Desc = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 48px 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: desc;
    align-items: flex-start;
    padding: 0;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.black};
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      /* Heading L */
      max-width: 522px;
      text-align: left;
      font-weight: 700;
      font-size: 80px;
      line-height: 80px;
      letter-spacing: -1px;
    }
  }

  p {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    max-width: 445px;
    color: ${({ theme }) => theme.colors.gray2};
    margin-top: 16px;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      text-align: left;
      font-size: 18px;
      line-height: 28px;
      @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: 48px;
      }
    }
  }

  button {
    background: ${({ theme }) => theme.colors.black};
    padding: 10px 22px;
    border-radius: 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white2};
    border: 1px solid ${({ theme }) => theme.colors.black};
    margin-top: 24px;
    transition: all 0.3s linear;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: 48px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.white2};
      padding: 10px 22px;
      border-radius: 15px;
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      color: ${({ theme }) => theme.colors.black};
      transition: all 0.3s linear;
    }
  }
`;
S.Logoes = styled.div`
  display: flex;
  padding: 0 20px;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 28px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: logoes;
    padding: 0;
    justify-content: flex-start;
    gap: 40px;
  }
`;
