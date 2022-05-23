import React from "react";
import PostList from "../components/postList";
import PostForm from "../components/postForm";
import FriendList from "../components/FriendList";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
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

export default Home;
