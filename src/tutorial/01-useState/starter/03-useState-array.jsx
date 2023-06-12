import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  var array = [1, 2, 3, 4, 5];
  var array2 = array;

  array = [];

  console.log(array); // [ ];
  console.log(array2); // [ 1, 2, 3, 4, 5 ]
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
