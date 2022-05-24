import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import BlogPosts from '../components/BlogPosts';
import Hero from '../components/Hero';
import Analytics from '../components/Analytics';
import Group from '../components/Group';

const Dashboard = ({ user }) => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts)

    return (
      <main>
        <div>
          {/* <Hero /> */}
          <Analytics />
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
  export default Dashboard;