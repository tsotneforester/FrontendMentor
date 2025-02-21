import styled from 'styled-components';
import emptyErrorImg from '../assets/nodata.png';
import serverErrorImg from '../assets/error.png';
import dataErrorImg from '../assets/404.png';

export default function Error({
  data = { name: 'default', message: 'something went wrong' },
}) {
  if (data.name == 'empty') {
    return (
      <S.Container>
        <img src={emptyErrorImg} />
        <h1>{data.message}</h1>
      </S.Container>
    );
  }

  if (data.name == 'data') {
    return (
      <S.Container>
        <img src={dataErrorImg} />
        <h1>{data.message || 'something went wrong'}</h1>
      </S.Container>
    );
  }
  if (data.name == 'server') {
    return (
      <S.Container>
        <img src={serverErrorImg} />
        <h1>{data.message || 'something went wrong'}</h1>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <img src={serverErrorImg} />
      <h1>{data.message || 'something went wrong'}</h1>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
