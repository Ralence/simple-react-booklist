import uuid from 'uuid/v1';

export const booksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK': {
      const book = { title: action.title, author: action.author, id: uuid() };
      return [...state, book];
    }
    case 'REMOVE_BOOK': {
      return state.filter(book => book.id !== action.id);
    }
    default:
      return state;
  }
};
