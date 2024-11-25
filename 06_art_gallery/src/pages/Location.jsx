import SimpleMap from '../components/SimpleMap';
import styled from 'styled-components';
import { root } from '../styled';
import LinkButton from '../components/LinkButton';

export default function Location() {
  return (
    <>
      <S.Map>
        <SimpleMap />
        <S.Link>
          <LinkButton string="BACK TO HOME" route="/" arrowSide="left" />
        </S.Link>
      </S.Map>
      <S.Location>
        <h1>OUR LOCATION</h1>
        <div>
          <h2>9th APRIL'S Str. 3/5</h2>
          <p>
            Tbilisi
            <br />
            ZIP 0108
            <br />
            Georgia
          </p>
          <span>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</span>
        </div>
      </S.Location>
    </>
  );
}

const S = {};
S.Map = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
  background-repeat: no-repeat;
  @media only screen and (min-width: ${root.media.tablet}) {
    height: 600px;
  }
`;

S.Link = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

S.Location = styled.div`
  width: 100%;
  padding: 48px 16px;
  background-color: ${root.color.black};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 48px;

  @media only screen and (min-width: ${root.media.tablet}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 88px 39px;
  }

  @media only screen and (min-width: ${root.media.desktop}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 104px 165px;
  }

  h1 {
    font-family: 'Big Shoulders Display', cursive;
    font-size: 55px;
    color: ${root.color.white};
    font-weight: 900;
    text-align: left;

    line-height: 50px;
    @media only screen and (min-width: ${root.media.tablet}) {
      width: 200px;
    }

    @media only screen and (min-width: ${root.media.desktop}) {
      font-size: 70px;
      line-height: 70px;
      width: 200px;
    }
  }

  div {
    & {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 20px;
    }

    h2 {
      font-family: 'Big Shoulders Display', cursive;
      font-size: 32px;
      color: ${root.color.orange};
      font-weight: 900;
      text-align: left;
      line-height: 32px;

      @media only screen and (min-width: ${root.media.desktop}) {
        font-size: 36px;
        line-height: 36px;
      }
    }

    p {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      color: ${root.color.white};
      font-weight: 300;
      text-align: left;
      line-height: 28px;

      @media only screen and (min-width: ${root.media.desktop}) {
        font-size: 22px;
        line-height: 32px;
      }
    }

    span {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      color: ${root.color.white};
      font-weight: 300;
      text-align: left;
      line-height: 28px;

      @media only screen and (min-width: ${root.media.tablet}) {
        max-width: 398px;
      }

      @media only screen and (min-width: ${root.media.desktop}) {
        max-width: 540px;
        font-size: 22px;
        line-height: 32px;
      }
    }
  }
`;
