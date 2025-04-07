import styled from 'styled-components';
import { AppContext } from '../Context';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Cards() {
  const { data, setData } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter') || '';

  const filteredData = searchTerm
    ? data.filter((item) => item.isActive === (searchTerm === 'active'))
    : data;

  const toggleActiveStatus = (index) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].isActive = !updatedData[index].isActive;
      return updatedData;
    });
  };

  const removeCard = (name) => {
    setData((prevData) => prevData.filter((item) => item.name !== name));
  };

  return (
    <S.Container>
      {filteredData.map((extension, index) => {
        const { logo, name, description, isActive } = extension;

        return (
          <S.Card key={index}>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={logo} alt={`${name} logo`} />
            <button onClick={() => toggleActiveStatus(index)}>
              {isActive ? 'active' : 'inactive'}
            </button>
            <button onClick={() => removeCard(name)}>remove</button>
          </S.Card>
        );
      })}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  `,
  Card: styled.div`
    border: 1px solid black;
    border-radius: 12px;
    width: 300px;

    button {
      border-radius: 6px;
      color: white;
      padding: 4px 8px;
      margin-right: 8px; // Add some spacing between buttons
    }

    button:nth-of-type(1) {
      background-color: darkgreen;
    }

    button:nth-of-type(2) {
      background-color: #000000;
    }
  `,
};
