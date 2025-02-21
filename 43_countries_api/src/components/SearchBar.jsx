import styled from 'styled-components';
import SearchSVG from '../assets/search.svg?react';

import { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get('country') || '';

  return (
    <S.Container>
      <SearchIcon />
      <input
        autoFocus
        type="text"
        value={selectedCountry}
        onChange={(e) => {
          const { value } = e.target;

          if (value) {
            setSearchParams({
              ...Object.fromEntries(searchParams),
              country: value,
            });
          } else {
            let tempObject = { ...Object.fromEntries(searchParams) };
            delete tempObject.country;
            setSearchParams(tempObject);
          }
        }}
        placeholder="Search countries..."
      />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  background-color: ${({ theme }) => theme.navBg};
  transition: ${({ theme }) => theme.trans};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 26px;
  padding: 14px 14px 14px 32px;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 18px 18px 18px 32px;
    gap: 24px;
  }
  input {
    /* padding: 14px 14px 14px 0; */
    background-color: transparent;
    outline: none;
    border: none;
    flex-grow: 1;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 14px;
      line-height: 20px;
    }

    color: ${({ theme }) => theme.text};
    &::placeholder {
      color: ${({ theme }) => theme.search.icon};
    }
  }
`;

const SearchIcon = styled(SearchSVG)`
  width: 16px;
  //margin: 14px 26px 14px 32px;
  path {
    fill: ${({ theme }) => theme.search.icon};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 18px;
  }
`;
