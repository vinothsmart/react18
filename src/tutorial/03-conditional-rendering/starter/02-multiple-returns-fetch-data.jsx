import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        // setUser(user);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return <h2>Fetch Data </h2>;
};
export default MultipleReturnsFetchData;
