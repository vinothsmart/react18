import { useCallback, useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeID, setActiveID] = useState(null);

  const toggleQuestion = useCallback(
    (id) => () => {
      setActiveID((prevID) => (prevID === id ? null : id));
    },
    []
  );

  return (
    <main>
      <Questions
        questions={questions}
        activeID={activeID}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
