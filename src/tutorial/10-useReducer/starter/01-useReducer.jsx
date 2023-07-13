import { useCallback, useReducer } from 'react';
import { data } from '../../../data';

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === 'CLEAR_ITEMS') {
    return { ...state, people: [] };
  }
  if (action.type === 'RESET_ITEMS') {
    return { ...state, people: data };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = useCallback(() => {
    dispatch({ type: 'CLEAR_ITEMS' });
    // setPeople([]);
  }, []);

  const resetList = useCallback(() => {
    dispatch({ type: 'RESET_ITEMS' });
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
