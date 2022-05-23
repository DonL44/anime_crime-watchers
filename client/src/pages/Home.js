import React from "react";
import PostForm from "../components/postForm";
import PostList from "../components/postList";
import FriendList from "../components/FriendList";

import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";
import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <PostForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Some Feed for Post(s)..." />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
