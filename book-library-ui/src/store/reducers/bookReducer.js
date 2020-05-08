import * as actions from '../actions/types';
const initialState = {};
const bookReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case actions.BOOK_LIST:
      return {
        ...state,
        bookList: action.bookList,
      };
       default:
      return state;
      }
}
export default bookReducer;
