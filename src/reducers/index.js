import { default as root } from './rootReducer';
import { default as bookList } from './bookListReducer';
import { default as book } from './bookReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  root,
  bookList,
  book
})
