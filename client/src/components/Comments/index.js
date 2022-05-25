import React from "react";
import { Link } from 'react-router-dom';


const Comments = ({ comments }) => {
  return (
    <>
<div className="min-h-full">
        <div className="py-10">
          <main className="lg:col-span-9 xl:col-span-6">
            <h3 style={{color: 'white'}}>Comments</h3>
            {comments && comments.map(comment => (
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
                                  {comment.username}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a className="hover:underline">
                                  <time>{comment.createdAt}</time>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mt-2 text-sm text-gray-700 space-y-4"
                          dangerouslySetInnerHTML={{ __html: comment.commentText }}
                        />
                      </article>
                    </li>
                </ul>
              </div> 
              ))}
            </main>
            </div>
      </div>
    </>
  )
};

export default Comments;