import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';

export type PaginationProps = {
  setDataPage: (currentPage: number) => void;
  totalPages: number;
};
const initialState = [1, 2, 3, 4, 5, 6, 7];

export const CustomPagination = ({
  totalPages,
  setDataPage,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const finalState = [(totalPages - 6), (totalPages - 5), (totalPages - 4), (totalPages - 3), (totalPages - 2), (totalPages - 1), totalPages];
  const [btnsSet, setBtnsSet] = useState(initialState);

  useEffect(() => {
    if (currentPage <= 5) {
      setBtnsSet(initialState);
    }
    if (currentPage > 5 && currentPage < totalPages - 4) {
      setBtnsSet([
        currentPage - 3,
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        currentPage + 3,
      ]);
    }
    if (totalPages >= 10 && currentPage > totalPages - 5) {
      setBtnsSet(finalState);
    }
  }, [currentPage]);

  const onClick = (currentPage: number) => {
    setCurrentPage(currentPage);
    setDataPage(currentPage);
  };

  const ShortPagination = () =>
    Array(totalPages - 1)
      .fill(null)
      .map((_, index) => (
        <>
          <Pagination.Item key={index} onClick={() => onClick(index + 1)}>
            {index + 1}
          </Pagination.Item>
        </>
      ));
  const LongPagination = () => {
    return (
      <>
        {currentPage > 5 && (
          <>
            <Pagination.Item
              onClick={() => {
                onClick(1);
              }}
            >
              1
            </Pagination.Item>
            <Pagination.Ellipsis disabled/>
          </>
        )}
        {btnsSet.map((btn, index) => (
          <Pagination.Item
            onClick={() => {
              onClick(btn);
            }}
            active={btn === currentPage}
            key={index}
          >
            {btn}
          </Pagination.Item>
        ))}
        {currentPage < totalPages - 4 && (
          <>
            <Pagination.Ellipsis disabled/>
            <Pagination.Item
              onClick={() => {
                onClick(totalPages);
              }}
            >
              {totalPages}
            </Pagination.Item>
          </>
        )}
      </>
    );
  };
  return (
    totalPages > 1 && (
      <Pagination>
        <Pagination.First
          onClick={() => {
            onClick(1);
          }}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => {
            onClick(currentPage - 1);
          }}
          disabled={currentPage === 1}
        />
        {totalPages < 10 ? <ShortPagination /> : <LongPagination />}
        <Pagination.Next
          onClick={() => {
            onClick(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => {
            onClick(totalPages);
          }}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    )
  );
};
