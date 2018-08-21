export default function(state={}, action) {
  switch(action.type) {
    case 'RECEIVE_BOOK':
      return action.book;
    default:
      return state;
  }
}