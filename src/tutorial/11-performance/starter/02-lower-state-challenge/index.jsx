import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import From from './From';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <From addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
