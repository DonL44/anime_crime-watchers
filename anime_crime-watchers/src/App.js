import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Sign from './components/Sign';
import Login from './components/Sign';
import About from './pages/About';
import Error from './pages/Error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/Sign" 
                element={<Sign />} 
              />
              <Route 
                path="/Analytics" 
                element={<Analytics />} 
              />
              <Route 
                path="/Hero" 
                element={<Hero />} 
              />
              
              <Route 
                path="/Blog/:id" 
                element={<Blog />} 
              />
               <Route 
                path="/Cards" 
                element={<Cards />} 
              />
              <Route 
                path="/Navbar" 
                element={<Navbar />} 
              />
              <Route 
                path="/Contact" 
                element={<Contact />} 
              />
              <Route 
                path="/Dashboard" 
                element={<Dashboard />} 
              />
              <Route 
                path="/Login" 
                element={<Login />} 
              />
              <Route 
                path="/About" 
                element={<About />} 
              />
              <Route 
                path="*" 
                element={<Error />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
