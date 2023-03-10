import React from 'react';

const Pagination = ({ studentsPerPage, totalStudents, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='w-full flex justify-center'>
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link px-4'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Pagination;