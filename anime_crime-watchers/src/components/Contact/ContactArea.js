
const ContactArea = () => {
   return (
      < >
         <section className="contact__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-6">
                     <div className="contact__wrapper">
                        <div className="section__title-wrapper mb-40">
                           <h2 className="section__title">Get in
                              <span className="yellow-bg yellow-bg-big"> touch
                                 <img src="assets/img/shape/yellow-bg.png" alt="" /></span>
                           </h2>
                           <p>Have a question or just want to say hi? Wed love to hear from you.</p>
                        </div>
                        <div className="contact__form">
                           <form action="#">
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-md-6">
                                    <div className="contact__form-input">
                                       <input required type="text" placeholder="Your Name" />
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-md-6">
                                    <div className="contact__form-input">
                                       <input required type="email" placeholder="Your Email" />
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__form-input">
                                       <input required type="text" placeholder="Subject" />
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__form-input">
                                       <textarea required placeholder="Enter Your Message"></textarea>
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__form-agree  d-flex align-items-center mb-20">
                                       <input required className="e-check-input" type="checkbox" id="e-agree" />
                                       <label className="e-check-label" htmlFor="e-agree">I agree to the<a href="#">Terms & Conditions</a></label>
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__btn">
                                       <button type='submit' className="tp-btn">Send your message</button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="contact__info white-bg p-relative z-index-1">
                        <div className="contact__shape">
                           <img className="contact-shape-1" src="assets/img/contact/contact-shape-1.png" alt="" />
                           <img className="contact-shape-2" src="assets/img/contact/contact-shape-2.png" alt="" />
                           <img className="contact-shape-3" src="assets/img/contact/contact-shape-3.png" alt="" />
                        </div>
                        <div className="contact__info-inner white-bg">
                           <ul>
                              <li>
                                 <div className="contact__info-item d-flex align-items-start mb-35">
                                    <div className="contact__info-icon mr-15">
                                       <svg className="map" viewBox="0 0 24 24">
                                          <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z" />
                                          <circle className="st0" cx="12" cy="10" r="3" />
                                       </svg>
                                    </div>
                                    <div className="contact__info-text">
                                       <h4>Vanderbilt Office</h4>
                                       <p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/35.8707663,-86.3478051/vanderbilt/@35.9834461,-86.8705264,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x886466a4a6ef8047:0xea511455173915d6!2m2!1d-86.8026551!2d36.1447034"> 2201 West End Ave, Nashville, TN 37235</a></p>

                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="contact__info-item d-flex align-items-start mb-35">
                                    <div className="contact__info-icon mr-15">
                                       <svg className="mail" viewBox="0 0 24 24">
                                          <path className="st0" d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z" />
                                          <polyline className="st0" points="22,6 12,13 2,6 " />
                                       </svg>
                                    </div>
                                    <div className="contact__info-text">
                                       <h4>Email us directly</h4>
                                       <p><a href="mailto:tanyaleepr@gmail.com">tanyaleepr@gmail.com</a></p>
                                       <p><a href="mailto:info@educal.com"> info@educal.com</a></p>
                                       <p><a href="mailto:info@educal.com"> info@educal.com</a></p>
                                       <p><a href="mailto:info@educal.com"> info@educal.com</a></p>
                                    </div>
                                 </div>
                              </li>
                              
                           </ul>
                           <div className="contact__social pl-30">
                              <h4>Follow Us</h4>
                              <ul>
                                 <li><a href="#" className="fb" ><i className="fa-brands fa-facebook-f"></i></a></li>
                                 <li><a href="#" className="tw" ><i className="fa-brands fa-twitter"></i></a></li>
                                 
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;