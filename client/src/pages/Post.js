import React from "react";
import PostList from "../components/postList";

import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";

const Post = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  console.log(posts);

  //   const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Some Feed for Thought(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Post;
