import styled from 'styled-components';
import Keyboard from '../components/Keyboard';
import Phrase from '../components/Phrase';
import Modal from '../components/Modal';
import GameNavigation from '../components/GameNavigation';
import { overlay } from '../styles/styles';

export default function Game() {
  return (
    <S.Container>
      <GameNavigation />
      <Phrase />
      <Keyboard />
      <Modal />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  min-height: 100vh;
  min-height: 100svh;
  padding: 32px 25px;
  ${overlay}
  width: 100%;
`;
