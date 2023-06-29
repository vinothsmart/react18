import { people } from '../../../data';
import Person from './Person';

const List = () => {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
};

export default List;
