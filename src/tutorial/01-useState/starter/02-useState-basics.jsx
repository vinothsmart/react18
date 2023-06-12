import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button type='button' onClick={handleClick} className='btn'>
        Increment
      </button>
    </>
  );
};

export default UseStateBasics;
