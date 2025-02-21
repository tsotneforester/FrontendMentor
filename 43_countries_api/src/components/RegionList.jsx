import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import ArrowSVG from '../assets/arrow.svg?react';
import { useState } from 'react';

export default function RegionList({ data }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const selectedRegion = searchParams.get('region') || '';

  const regions = [...new Set(data.map((country) => country.region))];

  return (
    <S.Container>
      <S.Toggler
        onClick={() => {
          setModalVisible((pre) => !pre);
        }}
      >
        <h1> {selectedRegion || 'Filter By Region'}</h1>
        <ArrowIcon />
      </S.Toggler>

      {modalVisible && (
        <S.Modal
          onClick={() => {
            setModalVisible(false);
          }}
        >
          {regions.map((region) => (
            <S.RegionItem
              key={region}
              $active={selectedRegion == region}
              onClick={() => {
                if (region == selectedRegion) {
                  let tempObject = { ...Object.fromEntries(searchParams) };
                  delete tempObject.region;
                  setSearchParams(tempObject);
                } else {
                  setSearchParams({
                    ...Object.fromEntries(searchParams),
                    region,
                  });
                }
              }}
            >
              {region}
            </S.RegionItem>
          ))}
        </S.Modal>
      )}
    </S.Container>
  );
}
const S = {};

S.Toggler = styled.div`
  background-color: ${({ theme }) => theme.navBg};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  width: fit-content;
  gap: 72px;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 18px 24px;
  }
  h1 {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      font-size: 14px;
    }
  }
`;

S.Container = styled.div`
  position: relative;
  width: max-content;
`;

S.Modal = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
  width: 100%;
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.navBg};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    top: 64px;
  }
`;

S.RegionItem = styled.p`
  font-weight: ${({ $active }) => ($active ? 900 : 400)};
  font-size: ${({ $active }) => ($active ? 14 : 12)}px;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ $active }) => ($active ? 16 : 14)}px;
  }
`;

const ArrowIcon = styled(ArrowSVG)`
  width: 10px;

  path {
    fill: ${({ theme }) => theme.search.icon};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 12px;
  }
`;
