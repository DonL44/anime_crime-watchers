import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { singleBlog } from '../../redux/features/blogSlice';
import BlogRightSide from '../Blog/BlogRightSide';
import FormArea from './FormArea';

const BlogDetailsArea = () => {
   // all blogs
   const blogs = useSelector(state => state.blogs.allBlogs);
   // blog
   const blog = useSelector(state => state.blogs.blog);
   // dispatch
   const dispatch = useDispatch();
   // dispatch single blog
   useEffect(() => {
      dispatch(singleBlog('62208badea7975d304d76830'))
   }, [dispatch])
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper postbox__details pr-20">
                        <div className="postbox__item transition-3 mb-70">
                           <div className="postbox__thumb m-img">
                              <img src={blog?.img_bg} alt="" />
                           </div>
                           <div className="postbox__content">
                              <div className="postbox__meta">
                                 <span><i className="far fa-calendar-check"></i> {blog?.date} </span>
                                 <span><a href="#"><i className="far fa-user"></i> Shawn</a></span>
                                 <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                              </div>
                              <h3 className="postbox__title">Boro Crime</h3>
                              <div className="postbox__text mb-40">
                                 <p>lorem</p>
                              </div>
                              <div className="postbox__quote grey-bg-2 mb-45 p-relative fix">
                                 <img className="quote" src="assets/img/blog/quote-1.png" alt="" />
                                 <blockquote>
                                    <p>lorem</p>
                                    <h4>Lee</h4>
                                 </blockquote>
                              </div>
                             
                           </div>
                        </div>
                        
                        {/* FormArea */}
                        <FormArea />
                     </div>
                  </div>
                  {/* BlogRightSide */}
                  <BlogRightSide blogs={blogs} />
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;