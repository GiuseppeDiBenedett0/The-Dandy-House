import React from "react";
import styled from "styled-components";
import { Pagination } from "react-bootstrap";

const CustomPagination = styled(Pagination)`
  &.pagination {
    background-color: transparent;
    display: flex;
  }

  .page-link {
    color: ${({ theme }) => theme.textColors.secondary};
    border: 1px solid #f13932;
    border-radius: 0 !important;
    &:hover {
      background-color: #db5651;
      color: #ffffff;
    }
  }

  .page-item.active .page-link {
    background-color: #f13932;
    color: ${({ theme }) => theme.textColors.primary};
    border-color: #f13932;
  }

  .page-item.disabled .page-link {
    color: #3b3b3b;
    pointer-events: none;
    background-color: #e7e7e7;
  }
`;

function PaginationComponent({ currentPage, totalPages, onPageChange }) {
  //Se non ci sono pagine, non mostrare nulla.
  if (totalPages === 0) return null;

  const paginationItems = [];

  //Genera gli elementi di paginazione.
  for (let page = 1; page <= totalPages; page++) {
    paginationItems.push(
      <Pagination.Item
        key={page}
        active={page === currentPage} //Imposta come attivo l'elemento della pagina corrente.
        onClick={() => onPageChange(page)} //Gestisce il clic per cambiare pagina.
      >
        {page}
      </Pagination.Item>
    );
  }

  return (
    <>
      <CustomPagination>
        <Pagination.First
          onClick={() => onPageChange(1)}
          disabled={currentPage <= 1}
        />
        <Pagination.Prev
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        />
        {paginationItems}
        <Pagination.Next
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        />
        <Pagination.Last
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage >= totalPages}
        />
      </CustomPagination>
    </>
  );
}

export default PaginationComponent;
