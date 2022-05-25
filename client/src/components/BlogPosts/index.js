import React from "react";
import { Link } from "react-router-dom";

  
const BlogPosts = ({ posts }) => {
    if(!posts.length) {
      return <h3>No Blog Posts Yet</h3>;
    }

  return (
    <div id="blog" className="bg-white pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className=" grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts && posts.map((post) => (
            <div key={post._id}>
              <p className="text-sm text-gray-500">
                <Link to={`/profile/${post.username}`}>{post.username}</Link> wrote on {post.createdAt}
              </p>
              <div className="mt-2 block">
                <Link to={`/post/${post._id}`}>
                  <p className="text-xl font-semibold text-gray-900">{post.postTitle}</p>
                  <p className="mt-3 text-base text-gray-500">{post.postText}</p>
                </Link>
              </div>
              <div className="mt-3">
                <p className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Comments: {post.commentCount} || Click to {' '} {post.commentCount ? 'see' : 'start'} the discussion!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default BlogPosts;