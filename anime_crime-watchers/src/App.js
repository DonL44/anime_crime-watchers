import React from "react";
// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react=router-dom";
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import "./App.css";

// class App extends Component {
//   render() {
//     return <div className="App">Hey</div>;
//   }
// }

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