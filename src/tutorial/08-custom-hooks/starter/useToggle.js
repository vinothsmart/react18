import { useCallback, useState } from 'react';

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = useCallback(() => {
    setShow((prev) => !prev);
  }, []);
  return { show, toggle };
};

export default useToggle;
