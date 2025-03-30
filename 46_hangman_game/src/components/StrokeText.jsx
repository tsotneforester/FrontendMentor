import styled from 'styled-components';
export default function StrokeText({ content, additionalStyles }) {
  return (
    <S.Container $content={content} $additionalStyles={additionalStyles}>
      {content}
    </S.Container>
  );
}
const S = {};

S.Container = styled.h1`
  line-height: 120%;
  text-align: center;
  background: linear-gradient(180deg, #67b6ff 16.42%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  position: relative;

  &:before,
  &:after {
    content: '${({ $content }) => $content}';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 120%;
    text-align: center;
    background: linear-gradient(180deg, #67b6ff 16.42%, #ffffff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:before {
    z-index: 1;
    -webkit-text-stroke: 10px #2c3342;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      -webkit-text-stroke: 14px #2c3342;
    }
  }

  &:after {
    z-index: 2;
  }

  ${({ $additionalStyles }) => $additionalStyles}
`;
