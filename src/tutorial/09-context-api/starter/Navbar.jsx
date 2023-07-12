import { useState, useCallback } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({
    name: 'john',
  });
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  return (
    <nav className='navbar'>
      <h5>Context API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};

export default Navbar;
