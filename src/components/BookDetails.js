import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const handleDelete = () => {
    const action = { type: 'REMOVE_BOOK', id: book.id };
    dispatch(action);
  };

  return (
    <li onClick={handleDelete}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
