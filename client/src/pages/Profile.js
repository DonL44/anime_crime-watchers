import React from "react";
import { useParams } from 'react-router-dom'
import BlogPosts from "../components/BlogPosts";

import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../utils/queries";


const Profile = () => {
  const { username: userParam } = useParams();
  console.log(userParam)

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam }
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
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
                            <h6 className="f-w-600"></h6>
                            <p>Web Designer</p>
                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-block">
                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Username</h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Posts</p>
                                    <h6 className="text-muted f-w-400"></h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Friends</p>
                                    <h6 className="text-muted f-w-400"></h6>
                                </div>
                            </div>
                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Recent</p>
                                    <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Most Viewed</p>
                                    <h6 className="text-muted f-w-400">Dinoter husainm</h6>
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