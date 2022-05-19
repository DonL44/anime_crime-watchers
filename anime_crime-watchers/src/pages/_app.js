import React, { useEffect } from 'react';
import 'swiper/css/bundle';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import { initializeApp } from "firebase/app";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "hanzai-watchers",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };
// initializeApp(firebaseConfig);

// function MyApp({ Component, pageProps }) {

//   useEffect(() => {
//     store.dispatch(coursesData());
//     store.dispatch(blogData());
//     store.dispatch(eventData());
//     store.dispatch(teamData());
//     store.dispatch(categoryData());
//     store.dispatch(getTotal());
//   }, [store]);

//   return (
//     <React.Fragment>
//       <Provider store={store}>
//         <Component {...pageProps} />
//         <ToastContainer />
//       </Provider>
//     </React.Fragment>
//   )
// }

export default MyApp
