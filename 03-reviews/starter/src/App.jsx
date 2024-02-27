import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <>
      <h2>Reviews Starter</h2>
      <FaBeer className="beer" />
    </>
  );
};
export default App;
