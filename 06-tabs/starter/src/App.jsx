import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = useCallback(async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return <h2>Tabs Starter</h2>;
};
export default App;
