import { useCallback, useMemo, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import slowFunction from './slowFunctions';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  const removeItem = useCallback(
    (id) => {
      const updatedPeople = people.filter((person) => person.id !== id);
      setPeople(updatedPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removeItem} />
    </section>
  );
};
export default LowerState;