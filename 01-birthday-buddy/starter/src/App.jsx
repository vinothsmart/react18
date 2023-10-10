import { useCallback, useEffect, useState } from 'react';
import data from './data';
import List from './List';

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const App = () => {
  const [people, setPeople] = useState(data);

  const [list, setList] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(usersDataURL);
    const data = await response.json();
    setList(data);
  }, []);

  const clearAll = useCallback(() => {
    setPeople([]);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" onClick={clearAll} className="btn btn-block">
          Clear All
        </button>
        <h1> List Users Page</h1>
        {list.map(({ id, name }) => (
          <div key={id}>
            <div className="row">
              <div className="col-lg-4">
                <p>{name}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default App;
