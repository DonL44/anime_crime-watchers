import React from "react";
import BlogPosts from "../components/BlogPosts";
import Auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';
import BlogForm from "../components/BlogForm";
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import FriendList from "../components/FriendList";


const Profile = () => {
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
                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                            </div>
                            <h1 className="f-w-600">{user.username}</h1>
                            
                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-block">
                            <h2 className="m-b-20 p-b-5 b-b-default f-w-600">Blog Posts</h2>
                            <div className="row">
                                <div className="col-sm-6">
                                  {!userParam && <BlogForm />}
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
                                    <h2 className="m-b-10 f-w-600">Friends</h2>
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
    </>
  )
}

export default Profile;