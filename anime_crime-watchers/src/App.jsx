import React from "react";
// import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Search from './components/Search';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Learn from './components/Learn';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import SignIn  from "./components/SignIn";
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
      <Learn />
      <Search />
      <Blog />
      <Contact />
      <SignIn />
      <Resources />
    </div>
  );
}

export default App;