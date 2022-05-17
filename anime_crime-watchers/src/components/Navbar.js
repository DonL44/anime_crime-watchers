import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/login'>Login</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/products'>Products</Link>
      <Link to='/contactus'>Contact Us</Link>
      <Link to='/submit'>Submit a crime tip</Link>
    </nav>
  );
};
export default Navbar;