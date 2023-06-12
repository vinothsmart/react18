import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [pepople, setPeople] = useState(data);
  return (
    <>
      {pepople.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      ))}
    </>
  );
};

export default UseStateArray;
