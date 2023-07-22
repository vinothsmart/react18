import { useCallback, useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_ITEMS, REMOVE_ITEM, RESET_ITEMS } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
    // setPeople((oldPeople) => {
    //   let newPeople = oldPeople.filter((person) => person.id !== id);
    //   return newPeople;
    // });
  };

  const clearList = useCallback(() => {
    dispatch({ type: CLEAR_ITEMS });
    // setPeople([]);
  }, []);

  const resetList = useCallback(() => {
    dispatch({ type: RESET_ITEMS });
    // setPeople(data);
  }, []);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          Reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
