import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 },
  ]);

  const addBook = (title, author) => {
    const book = { title, author, id: uuid() };
    setBooks([...books, book]);
  };

  const removeBook = id => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks([...updatedBooks]);
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
