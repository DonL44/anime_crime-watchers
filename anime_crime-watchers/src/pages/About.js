import { Link } from 'react-router-dom';
const About = () => {
//   return (
//     <section className='section'>
//       <div>
//       <h2>About</h2>
//       <img src='../../../../reactfolio/src/assets/images/weatherdashboard.jpeg' className="my-2" alt="cover" /> 
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
//         condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
//         mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
//         Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
//         justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
//         dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
//         Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
//       </p>
//       </div>
//       <Link to='/' className='btn'>
//         Back Home
//       </Link>
//     </section>
//   );
// };
// export default About;

return (
  <section className="my-5 text-white">
    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Become a Samurai!
      </h1>
    {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
    <div className="my-2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
        condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
        mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
        Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
        justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
        dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
        Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
      </p>
    </div>
  </section>
  
  
);
}

export default About;