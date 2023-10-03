import { useState } from 'react';
import data from './data';
const App = () => {
  const [peeple, setPeople] = useState(data);
  console.log(peeple);
  return <h2>Birthday Reminder - Starter</h2>;
};
export default App;
