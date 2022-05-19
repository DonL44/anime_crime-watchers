import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import FormArea from "../../../components/BlogDetails/FormArea";
import DynamicPageHeader from "../../../components/common/DynamicPageHeader";
import { singleBlog } from "../../../redux/features/blogSlice";

const BlogDetails = () => {
   // blogs
   const blogs = useSelector(state => state.blogs.allBlogs);
   // blog
   const blog = useSelector(state => state.blogs.blog);
   // router
   const router = useRouter();
   // id
   const id = router.query.blog_details;
   // dispatch
   const dispatch = useDispatch();
   // get single blog
   useEffect(() => {
      if (!id) {

      }
      else {
         dispatch(singleBlog(id))
      }
   }, [dispatch, id])
   return (
      <>
      <Head>
        <title>Blog Details Page</title>
      </Head>

         <DynamicPageHeader />

         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper postbox__details pr-20">
                        <div className="postbox__item transition-3 mb-70">
                           <div className="postbox__thumb m-img">
                              <img src={blog?.img} alt="" />
                           </div>
                           <div className="postbox__content">
                              <div className="postbox__meta">
                                 <span><i className="far fa-calendar-check"></i> {blog?.date} </span>
                                 <span><a href="#"><i className="far fa-user"></i> Shahnewaz</a></span>
                                 <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                              </div>
                              <h3 className="postbox__title">Samurai</h3>
                              <div className="postbox__text mb-40">
                                 <p>lorem</p>
                              </div>
                              
                            
                        </div>
                        {/* FormArea */}
                        <FormArea />
                     </div>
                  </div>
                  {/* BlogRightSide */}
                  <BlogRightSide blogs={blogs} dynamicPage={true} />
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetails;