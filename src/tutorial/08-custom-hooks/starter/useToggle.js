import { useCallback, useState } from 'react';

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = useCallback(() => {
    setShow(!show);
  }, [show]);
  return { show, toggle };
};

export default useToggle;
