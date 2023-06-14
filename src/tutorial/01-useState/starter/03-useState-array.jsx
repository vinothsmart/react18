import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [pepople, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = pepople.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearItems = () => {
    setPeople([]);
  };
  return (
    <>
      {pepople.map(({ id, name }) => (
        <div key={id}>
          <h4>{name}</h4>
          <button className='btn' onClick={() => removeItem(id)}>
            remove
          </button>
        </div>
      ))}
      <button className='btn' style={{ marginTop: '2em' }} onClick={clearItems}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
