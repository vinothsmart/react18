import { data } from '../../../data';
import { CLEAR_ITEMS, REMOVE_ITEM, RESET_ITEMS } from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_ITEMS) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_ITEMS) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload),
    };
  }

  // return state;
  throw new Error(`No matching "${action.type}" action type`);
};

export default reducer;
