import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Sign from './pages/Sign';
import Login from './pages/Sign';
import About from './pages/About';
import Error from './pages/Error';

import Footer from './components/Footer';

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
          <Navbar />
          <Hero />
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
                path="/Blog" 
                element={<Blog />} 
              />
               
              <Route 
                path="/Contact" 
                element={<Contact />} 
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
          
           
         
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
