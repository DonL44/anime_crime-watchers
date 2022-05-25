import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import BlogPosts from '../components/BlogPosts';
import Hero from '../components/Hero';
import Analytics from '../components/Analytics';
import Group from '../components/Group';


const Home = ({ user }) => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts)

    return (
      <main className='d-flex flex-column min-vh-100'>
        <div>
          <Hero />
          <Analytics />
      <div id="blog" className="bg-white pt-16 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"></div>

          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Blog</h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">See what other members are saying about crime in their towns.</p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                >
                  Notify me
                </button>
              </div>
            </form>
        </div>
        </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            
            <BlogPosts posts={posts} title="Blog Posts" />
          )}
          <Group />
        </div>
      </main>
    );
  };
  export default Home;