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
    console.log('Component Mounted');
    const intId = setInterval(() => {
      console.log('Hello');
    }, 2000);
    return () => {
      console.log('Component Unmounted');
      clearInterval(intId);
      console.log('Cleanup Function');
    };
  }, []);
  return <h2>Random Component</h2>;
};

export default CleanupFunction;
