export default function(state={
  bookArray: [],
  sorting: {
    by: 'name',
    order: 'asc'
  },
  listLength: 0,
  searchQuery: ''
}, action) {
  switch(action.type) {
    case 'RECEIVE_BOOK_LIST':
      return {
        ...state,
        bookArray: action.bookArray,
        listLength: action.listLength
      };
    case 'SET_SORTING':
      return {
        ...state,
        sorting: action.sorting
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.query
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.newPage
      }
    default: 
      return state;
  }
}