import fetch from '../mockFetch';

const setLoading = isLoading => ({
  type: 'LOADING',
  isLoading
});

// BookList

export const changePage = (newPage, limit) => async dispatch => {
  await dispatch(fetchBooks(newPage, limit));
  return {
    type: 'CHANGE_PAGE',
    newPage
  }
};

export const setSorting = sorting => ({
  type: 'SET_SORTING',
  sorting
});

export const setSearchQuery = query => ({
  type: 'SET_SEARCH_QUERY',
  query
});

export const receiveBooks = books => ({
  type: 'RECEIVE_BOOK_LIST',
  ...books
});

export const fetchBooks = (page, limit, params={}) => async dispatch => {
  dispatch(setLoading(true));
  const urlParams = new URLSearchParams();
  urlParams.append('from', page * limit);
  urlParams.append('to', page * limit + +limit);
  if(params.sortBy) {
    urlParams.append('sortby', params.sortBy);
    urlParams.append('sortorder', params.sortOrder);
  }
  if(params.searchQuery) {
    urlParams.append('search', params.searchQuery);
  }
  const bookArray = await fetch(`https://whatever.com/getbooks?${urlParams.toString()}`);
  dispatch(setLoading(false));
  dispatch(receiveBooks(bookArray));
}

// ShowBook

const receiveBook = book => ({
  type: 'RECEIVE_BOOK',
  book
})

export const fetchBook = id => async dispatch => {
  dispatch(setLoading(true));
  const book = await fetch(`https://whatever.com/getbook?id=${id}`);
  dispatch(setLoading(false));
  dispatch(receiveBook(book));
}

// EditBook

export const changeBook = (id, data) => async dispatch => {
  dispatch(setLoading(true));
  const newData = await fetch(`https://whatever.com/changebook?id=${id}`, {
    method: 'POST',
    body: data
  });
  dispatch(setLoading(false));
  dispatch(receiveBook(newData));
}