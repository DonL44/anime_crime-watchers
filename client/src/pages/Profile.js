import React from "react";
import BlogPosts from "../components/BlogPosts";
import Auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import FriendList from "../components/FriendList";


const Profile = () => {
  const [addFriend] = useMutation(ADD_FRIEND);
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER: QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }
  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
    <div className="page-content page-container" id="page-content" >
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green bg-indigo-600 user-profile">
                        <div className=" text-center text-white">
                            <div className="m-b-25">
                               
                            </div>
                            <p style={{fontSize: '30px'}}>{user.username}</p>
                            <h2>Profile</h2>
                            <button className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700" onClick={handleClick}>
                              Add Friend
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-block">
                            <h2 className="m-b-20 p-b-5 b-b-default f-w-600">Blog Posts</h2>
                            <div className="row">
                                <div className="col-sm-6">
                                    <BlogPosts posts={user.posts} />
                                </div>
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600"></p>
                                    <h6 className="text-muted f-w-400"></h6>
                                </div>
                            </div>
                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2 className="m-b-20 p-b-5 b-b-default f-w-600">Friends</h2>
                                    <div className="col-12 col-lg-3">
                                      <FriendList 
                                      username={user.username}
                                      friendCount={user.friendCount}
                                      friends={user.friends}
                                    />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </div>
            </div>
        </div>
    </>
  )
}

export default Profile;