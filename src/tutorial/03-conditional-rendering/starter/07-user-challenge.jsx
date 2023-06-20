import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    setUser({ id: 1, username: 'Vino' });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <>
          <h2>Hello there {user.username}</h2>
          <button className='btn' onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button className='btn' onClick={handleLogin}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserChallenge;
