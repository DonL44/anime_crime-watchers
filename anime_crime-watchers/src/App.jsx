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
import "./App.css";



function App() {
  return (
    <div>
      <Router>

        <main>
          <Navbar />
          <Routes>
            <Route
              path="/signup"
              element={<Signup />}
            >
            </Route>

          </Routes>
        </main>
        <div>
          <Main />
          <Hero />
          <Analytics />
          <Blog />
          <Group />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;