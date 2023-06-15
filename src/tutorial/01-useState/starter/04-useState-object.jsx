import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Vinoth',
    age: 34,
    hobby: 'programming',
  });
  const handleShow = () => {
    setPerson((prevValues) => ({
      ...prevValues,
      name: 'John',
      age: 25,
      hobby: 'video games',
    }));
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4>
      <button className='btn' onClick={handleShow}>
        Show Me
      </button>
    </>
  );
};

export default UseStateObject;
