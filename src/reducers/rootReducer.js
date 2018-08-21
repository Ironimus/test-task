export default function(state={
  isLoading: true
}, action) {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      };
    default: 
      return state;
  }
}
