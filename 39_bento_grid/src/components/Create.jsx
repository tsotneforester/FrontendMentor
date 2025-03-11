import styled from 'styled-components';
export default function Create() {
  return (
    <S.Container>
      <h1>
        Create and schedule content <span>quicker.</span>
      </h1>
      <img src="images/illustration-create-post.png" alt="create-post" />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px;
  width: 100%;
  background: ${({ theme }) => theme.colors.yellow100};
  border-radius: 10px;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: createpost;
    height: 100%;
    justify-content: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 50%;
  }

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 28px;
    letter-spacing: -0.06em;
    color: ${({ theme }) => theme.colors.black};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 36px;
      line-height: 30px;
    }

    span {
      color: ${({ theme }) => theme.colors.purple500};
      font-style: italic;
    }
  }
  img {
    width: 100%;
    max-width: 190px;
  }
`;
