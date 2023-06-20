import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  console.log('render');
  return (
    <>
      <button className='btn' onClick={handleClick}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log('hello world');
    };
    window.addEventListener('scroll', someFunc);
    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);
  return <h2>Random Component</h2>;
};

export default CleanupFunction;
