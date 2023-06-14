import { useState } from 'react';

const UseStateObject = () => {
  const [values, setValues] = useState({
    name: 'Vinoth',
    age: 34,
    hobby: 'programming',
  });
  const handleShow = () => {
    setValues((prevValues) => ({ ...prevValues, name: 'Kanna' }));
  };
  return (
    <>
      <h3>{values.name}</h3>
      <h3>{values.age}</h3>
      <h4>Enjoys : {values.hobby}</h4>
      <button className='btn' onClick={handleShow}>
        Show Me
      </button>
    </>
  );
};

export default UseStateObject;
