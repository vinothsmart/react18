import { useCallback, useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  const removeTour = useCallback(
    id => () => {
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
    },
    [tours],
  );

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
