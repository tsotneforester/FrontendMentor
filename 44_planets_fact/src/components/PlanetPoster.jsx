import styled from 'styled-components';
import { motion } from 'framer-motion';
import planetsData from '../data.json';
let categories = {
  overview: 'planet',
  structure: 'internal',
  geology: 'planet',
};

function getMaxRadius(arr) {
  return Math.max(...arr.map((e) => e.size));
}

const emergeAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.3,
    },
  },
};

export default function PlanetPoster({ category, planetData }) {
  return (
    <S.Container>
      <MotionImg
        src={planetData.images[categories[category]]}
        alt="planet"
        key={category + planetData.name}
        $scaleFactor={planetData.size / getMaxRadius(planetsData)}
        //🔰 framer
        initial="hidden"
        animate="visible"
        variants={emergeAnimation}
      />
      {category == 'geology' && (
        <MotionPinImg
          src={planetData.images.geology}
          key={category + planetData.radius}
          alt="geology"
          //🔰 framer
          initial="hidden"
          animate="visible"
          variants={emergeAnimation}
        />
      )}
    </S.Container>
  );
}
const S = {};

S.Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: poster;
    height: 460px;
  }
`;
S.Img = styled.img`
  max-width: 224px;
  transform: scale(${({ $scaleFactor }) => $scaleFactor});

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 369px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 460px;
  }
`;
S.PinImg = styled.img`
  position: absolute;
  left: calc(50% - 35px);
  width: 70px;
  top: 60%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 106px;
    left: calc(50% - 53px);
  }
`;
const MotionImg = motion(S.Img);
const MotionPinImg = motion(S.PinImg);
