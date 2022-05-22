import React from "react";
// import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Analytics from './components/Analytics';
import Group from './components/Group';
import Footer from './components/Footer/index';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Signup  from "./pages/Signup"
import "./App.css";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <Router>
          <Routes>
            <Route
            path="/signup"
            element={<Signup />}>
            </Route>
          </Routes>
        </Router>
      </main>
      
      <Analytics />
      <Blog />
      <Group />
      <Footer />
    </div>
  );
}

export default App;