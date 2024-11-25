
import styled from 'styled-components';
import { root } from '../styled';
import { padding } from '../styled';
import LinkButton from '../components/LinkButton';


export default function Home() {
  return (
    <>
      <S.Modern>
        <h1 className="striped-line1" data-content="MODERN">
          MODERN
        </h1>
        <h1 className="striped-line2" data-content="ART GALLERY">
          ART GALLERY
        </h1>

        <div className="black"></div>
        <div className="granny"></div>
        <div className="white"></div>

        <div className="text-box">
          <h1>
            MODERN <br />
            ART GALLERY
          </h1>
          <p>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
          <LinkButton string="OUR LOCATION" route="/location" arrowSide="right" />
        </div>
      </S.Modern>
      <S.Grid>
        <S.Your>
          <div className="aztec-hall"></div>
          <h1>Your Day at the Gallery</h1>
          <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
        </S.Your>
        <S.Come>
          <div className="wood-chair"></div>
          <div className="main-hall"></div>
          <div className="text">
            <h1>COME &amp; BE INSPIRED</h1>
            <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
          </div>
        </S.Come>
      </S.Grid>
    </>
  );
}

const S = {};

S.Modern = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  @media only screen and (min-width: ${root.media.tablet}) {
    display: grid;
    grid-template-columns: 57% 43%;
    grid-template-rows: 700px;
  }

  @media only screen and (min-width: ${root.media.desktop}) {
    max-width: ${root.maxWidth};
    position: relative;
    grid-template-columns: 3fr 4fr 3fr;
    grid-template-rows: 800px;
  }

  .black {
    display: none;
    @media only screen and (min-width: ${root.media.desktop}) {
      background-color: ${root.color.black};
      display: block;
    }
  }
  .granny {
    width: 100%;
    aspect-ratio: 375/240;
    max-height: 300px;
    background-image: url('/assets/mobile/image-hero@2x.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and (min-width: ${root.media.tablet}) {
      max-height: none;
      aspect-ratio: unset;
      background-image: url('/assets/tablet/image-hero@2x.jpg');
    }

    @media only screen and (min-width: ${root.media.desktop}) {
      background-image: url('/assets/desktop/image-hero@2x.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .white {
    display: none;
    @media only screen and (min-width: ${root.media.tablet}) {
      display: block;
      background-color: ${root.color.white};
    }
  }

  .striped-line1,
  .striped-line2 {
    display: none;

    @media only screen and (min-width: ${root.media.desktop}) {
      display: block;
      height: 298px;
      width: 100%;
      top: 190px;
      padding-left: 10vw;
      font-family: 'Big Shoulders Display', cursive;
      font-size: 72px;
      white-space: nowrap;
      color: ${root.color.black};
      position: absolute;
      overflow: hidden;
      white-space: nowrap;
      content: attr(data-content);
      font-size: 96px;
      color: ${root.color.black};
      font-weight: 900;
      text-align: left;

      &:before {
        position: absolute;
        overflow: hidden;
        white-space: nowrap;
        padding-left: 10vw;
        left: 0;
        width: 30%;
        height: 100%;
        content: attr(data-content);

        font-size: 96px;
        color: ${root.color.white};
        font-weight: 900;
        text-align: left;
      }
    }
  }

  .striped-line2 {
    @media only screen and (min-width: ${root.media.desktop}) {
      top: 284px;
    }
  }

  .text-box {
    margin-top: 32px;
    ${padding}
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 32px;
    @media only screen and (min-width: ${root.media.tablet}) {
      margin-top: 0;
      row-gap: 48px;
      width: calc(340px + 6vw);
      position: absolute;
      right: 0;
      top: 100px;
      padding-left: 0;
    }
    @media only screen and (min-width: ${root.media.desktop}) {
      row-gap: 64px;
      width: calc(350px + 6vw);
      top: 190px;
      row-gap: 32px;
    }

    h1 {
      font-family: 'Big Shoulders Display', cursive;
      font-size: 60px;
      color: ${root.color.black};
      font-weight: 900;
      text-align: left;
      line-height: 55px;
      @media only screen and (min-width: ${root.media.tablet}) {
        position: relative;
        font-size: 70px;
        line-height: 65px;
      }
      @media only screen and (min-width: ${root.media.desktop}) {
        display: none;
      }
    }
    p {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      color: ${root.color.black};
      font-weight: 300;
      text-align: left;
      line-height: 28px;
      @media only screen and (min-width: ${root.media.tablet}) {
        position: relative;
      }
      @media only screen and (min-width: ${root.media.desktop}) {
        font-size: 22px;
        line-height: 32px;
      }
    }
  }
`;
S.Grid = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${root.color.white};
  ${padding}
`;
S.Your = styled.div`
  width: 100%;
  max-width: ${root.maxWidth};
  margin-top: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  background-color: ${root.color.white};
  @media only screen and (min-width: ${root.media.tablet}) {
    display: grid;
    grid-template-areas:
      'h1 image'
      'p image';
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 200px 200px;
  }

  .aztec-hall {
    width: 100%;
    aspect-ratio: 343/320;
    background-image: url('/assets/mobile/image-grid-1@2x.jpg');
    background-repeat: no-repeat;
    background-size: cover; //length/cover/contain
    @media only screen and (min-width: ${root.media.tablet}) {
      background-image: url('/assets/tablet/image-grid-1@2x.jpg');
      background-position: right top;

      order: 2;
      grid-area: image;
      aspect-ratio: unset;
      height: 100%;
    }
    @media only screen and (min-width: ${root.media.desktop}) {
      background-image: url('/assets/desktop/image-grid-1@2x.jpg');
    }
  }

  h1 {
    font-family: 'Big Shoulders Display', cursive;
    font-size: 50px;
    color: ${root.color.black};
    font-weight: 900;
    text-align: left;
    margin: 25px 0 21px 0;
    line-height: 45px;
    max-width: 340px;
    text-transform: uppercase;
    @media only screen and (min-width: ${root.media.tablet}) {
      max-width: 180px;
      grid-area: h1;
      margin: 0;
      align-self: center;
    }
    @media only screen and (min-width: ${root.media.desktop}) {
      max-width: 295px;
    }
  }

  p {
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    color: ${root.color.black};
    font-weight: 300;
    text-align: left;
    line-height: 28px;
    max-width: 335px;
    @media only screen and (min-width: ${root.media.tablet}) {
      max-width: 223px;
      grid-area: p;
    }
    @media only screen and (min-width: ${root.media.desktop}) {
      max-width: 290px;
    }
  }
`;
S.Come = styled.div`
  margin-top: 32px; //❌
  width: 100%;
  max-width: ${root.maxWidth};
  margin-bottom: 120px;
  display: grid;
  justify-content: center;
  row-gap: 16px;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto;
  @media only screen and (min-width: ${root.media.tablet}) {
    grid-template-columns: 57fr 43fr;
    grid-template-rows: 44fr 56fr;
    aspect-ratio: 689/720;
    row-gap: 11px;
    column-gap: 11px;
    margin-top: 11px;
  }
  @media only screen and (min-width: ${root.media.desktop}) {
    gap: 30px;
    grid-template-columns: 59fr 41fr;
    grid-template-rows: 45fr 55fr;
    aspect-ratio: 1110/720;
    margin-top: 30px;
  }

  .wood-chair {
    aspect-ratio: 343/480;
    background-image: url('/assets/mobile/image-grid-2@2x.jpg');
    background-repeat: no-repeat;
    background-size: cover; //length/cover/contain
    @media only screen and (min-width: ${root.media.tablet}) {
      background-image: none;
      background-image: url('/assets/tablet/image-grid-2@2x.jpg');
      grid-area: 1 / 1 / span 2 / span 1;
      aspect-ratio: unset;
    }
    @media only screen and (min-width: ${root.media.desktop}) {
      background-image: url('/assets/desktop/image-grid-2@2x.jpg');
    }
  }
  .main-hall {
    aspect-ratio: 343/200;
    background-image: url('/assets/mobile/image-grid-3@2x.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and (min-width: ${root.media.tablet}) {
      background-image: none;
      background-image: url('/assets/tablet/image-grid-3@2x.jpg');
      aspect-ratio: unset;
      grid-area: 1 / 2 / span 1 / span 1;
    }
    @media only screen and (min-width: ${root.media.desktop}) {
      //aspect-ratio: 445/313;
      background-image: url('/assets/desktop/image-grid-3@2x.jpg');
    }
  }
  .text {
    background-color: ${root.color.black};
    padding: 48px 24px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    @media only screen and (min-width: ${root.media.tablet}) {
      padding: 85px 29px;
      grid-area: 2 / 2 / span 1 / span 1;
    }
    @media only screen and (min-width: ${root.media.desktop}) {
      gap: 24px;
      padding: 65px 48px;
    }

    h1 {
      font-family: 'Big Shoulders Display', cursive;
      font-size: 50px;
      color: ${root.color.white};
      font-weight: 900;
      text-align: left;
      line-height: 45px;
      max-width: 205px;
    }

    p {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      color: ${root.color.white};
      font-weight: 300;
      text-align: left;
      line-height: 28px;
      max-width: 290px;
    }
  }
`;
