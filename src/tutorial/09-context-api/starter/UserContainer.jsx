import { useUserContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useUserContext();
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;