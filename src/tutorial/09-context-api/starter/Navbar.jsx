import { useState, useCallback, createContext, useContext } from 'react';
import NavLinks from './NavLinks';

export const UserContext = createContext();

// create custom hook
export const useUserContext = () => useContext(UserContext);

const Navbar = () => {
  const [user, setUser] = useState({
    name: 'john',
  });

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <UserContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </UserContext.Provider>
  );
};

export default Navbar;
