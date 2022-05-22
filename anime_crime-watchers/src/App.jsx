import React from "react";
// import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Analytics from './components/Analytics';
import Group from './components/Group';
import Footer from './components/Footer/index';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Signup  from "./pages/Signup";
import Main from "./components/Main";
import Search from "./components/Search"
import "./App.css";



function App() {
  return (
    <div>
      <Router>

        <main>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                <Main />
                <Hero />
                <Search />
                <Analytics />
                <Blog />
                <Group />
                </main>
              }
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;