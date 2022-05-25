import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Analytics from './components/Analytics';
import Group from './components/Group';
import Footer from './components/Footer/index';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './components/BlogPosts';
import Signup  from "./pages/Signup";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import User from './components/User';
import "./App.css";
import SingleBlogPost from "./pages/SingleBlogPost";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <main>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="post/:id"
                element={<SingleBlogPost />}
              />
              <Route
                path="/user"
                element={<User />}
              />
              <Route
                path="/dashboard"
                element={<Dashboard />}
              />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;