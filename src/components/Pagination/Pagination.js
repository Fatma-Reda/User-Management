import React from 'react';

const Pagination = ({ usersPerPage, totalusers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalusers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="float-md-right w-50">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
