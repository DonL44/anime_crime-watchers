import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Cards from '../components/Cards';
import Analytics from '../components/Analytics';
import Contact from '../components/Contact';

const Home = () => {
    return (
      <div>
      <Hero />
        <About />     
        <Cards /> 
        <Analytics />
        <Contact />
      
      </div>
    );
  };
  export default Home;