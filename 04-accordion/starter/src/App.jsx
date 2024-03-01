import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeID, setActiveID] = useState(null);

  return (
    <main>
      <Questions questions={questions} activeID={activeID} />
    </main>
  );
};
export default App;
