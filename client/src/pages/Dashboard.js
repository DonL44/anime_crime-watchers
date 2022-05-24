import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import BlogPosts from '../components/BlogPosts';


const Dashboard = ({ user }) => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts)

    return (
      <main>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BlogPosts posts={posts} title="Blog Posts" />
          )}
        </div>
      </main>
    );
  };
  export default Dashboard;