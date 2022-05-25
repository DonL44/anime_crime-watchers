import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_POST } from "../utils/queries";
import Comments from "../components/Comments";
import { useParams } from 'react-router-dom'

import Auth from '../utils/auth'
import CommentForm from "../components/CommentForm";

const SingleBlogPost = () => {
  
  const { id: postId } = useParams();
  console.log(postId);

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <div className="max-w-3xl mx-auto">
            <main className="lg:col-span-9 xl:col-span-6">
              <div className="mt-4">
                <ul role="list" className="space-y-4">
                    <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                      <article>
                        <div>
                          <div className="flex space-x-3">
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a className="hover:underline">
                                  {/* user info link */}
                                  {post.username}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a className="hover:underline">
                                  <time>{post.createdAt}</time>
                                </a>
                              </p>
                            </div>
                          </div>
                          <h2 className="mt-4 text-base font-medium text-gray-900">
                            {post.postTitle}
                          </h2>
                        </div>
                        <div
                          className="mt-2 text-sm text-gray-700 space-y-4"
                          dangerouslySetInnerHTML={{ __html: post.postText }}
                        />
                      </article>
                    </li>
                </ul>
                {post.commentCount > 0 && <Comments comments={post.comments} />}
              </div>
              {Auth.loggedIn() && <CommentForm postId={postId} />}
            </main>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default SingleBlogPost;