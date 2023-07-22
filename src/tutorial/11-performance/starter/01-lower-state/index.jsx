import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Counter from './Counter';
const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <Counter />
      <List people={people} />
    </>
  );
};
export default LowerState;
