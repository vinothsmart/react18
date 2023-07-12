import { useState, useCallback, createContext } from 'react';
import NavLinks from './NavLinks';

export const UserContext = createContext();

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
