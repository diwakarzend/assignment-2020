import * as actions from './types';

export function fetchBookList() {
  return { 
    type: actions.FETCH_BOOK_LIST,
   };
}

export function bookList(data) {
return {
  type: actions.BOOK_LIST,
  bookList: data
  };
}
