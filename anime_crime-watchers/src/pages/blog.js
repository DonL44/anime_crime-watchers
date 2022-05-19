import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <section className='section'>
      <h2>Blog</h2>
      <Link to='/' className='btn'>
        Back Home
      </Link>
    </section>
  );
};
export default Blog;