import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Login'>Login</Link>
      <Link to='/Sign'>Sign Up</Link>
      <Link to='/Blog'>Blog</Link>
      <Link to='/Products'>Products</Link>
      <Link to='/Contact'>Contact Us</Link>
      <Link to='/Submit'>Submit a crime tip</Link>
    </nav>
  );
};
export default Navbar;