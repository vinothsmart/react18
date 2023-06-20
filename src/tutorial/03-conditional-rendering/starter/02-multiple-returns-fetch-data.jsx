import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error...</h2>;

  return (
    <>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
