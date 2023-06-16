import { useCallback, useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = useCallback(() => {
    // setValue((prevState) => prevState + 1);
    setTimeout(() => {
      setValue((prevState) => prevState + 1);
    }, 2000);
  }, []);

  return (
    <h2>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        Increase
      </button>
    </h2>
  );
};

export default UseStateGotcha;
