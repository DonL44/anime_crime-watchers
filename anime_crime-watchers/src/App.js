import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Blog />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;