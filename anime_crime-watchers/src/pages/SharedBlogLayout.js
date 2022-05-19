import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <h2>Blog</h2>
      <Outlet />
    </>
  );
};
export default Home;