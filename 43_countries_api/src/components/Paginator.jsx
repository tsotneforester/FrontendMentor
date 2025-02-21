import styled from 'styled-components';

export default function Paginator({ data, limit, activePage, handler }) {
  const totalPages = Math.ceil(data.length / limit);

  if (data.length < limit) return null;

  // Simple pagination if pages are less than 6
  if (totalPages < 6) {
    return (
      <Container>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i}
            active={i + 1 === activePage}
            onClick={() => handler(i + 1)}
          >
            {i + 1}
          </PageButton>
        ))}
      </Container>
    );
  }

  return (
    <Container>
      <PageButton
        onClick={() => handler(activePage - 1)}
        disabled={activePage === 1}
      >
        Prev
      </PageButton>

      <PageButton active={activePage === 1} onClick={() => handler(1)}>
        1
      </PageButton>

      {activePage > 2 && <Ellipsis>...</Ellipsis>}

      {activePage > 1 && activePage < totalPages && (
        <PageButton active>{activePage}</PageButton>
      )}

      {activePage < totalPages - 1 && <Ellipsis>...</Ellipsis>}

      <PageButton
        active={activePage === totalPages}
        onClick={() => handler(totalPages)}
      >
        {totalPages}
      </PageButton>

      <PageButton
        onClick={() => handler(activePage + 1)}
        disabled={activePage === totalPages}
      >
        Next
      </PageButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ active }) => (active ? '#007bff' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background: ${({ active }) => (active ? '#0056b3' : '#d6d6d6')};
  }
`;

const Ellipsis = styled.span`
  padding: 8px;
  color: #777;
`;

// function getPaginatedData(dataArray, currentPage, itemsPerPage) {
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   return dataArray.slice(startIndex, endIndex);
// }

{
  /* <Paginator
  limit={itemsPerPage} // let itemsPerPage = 12;
  data={data} //[...]
  activePage={activePage} // const [activePage, setActivePage] = useState(1);
  handler={handler}
/>; */
}
