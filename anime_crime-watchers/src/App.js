import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SinglePost from './pages/SinglePost';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Sign from './components/Sign';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedBlogLayout from './pages/SharedBlogLayout';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Login from "./components/Login";

// Link to the GraphQL server on the backend
const httpLink = createHttpLink({
  uri: "/graphql",
});
// "Middleware" function to retrieve token and combine it with the existing httpLink
// We do not need the first parameter offered by setContext. Because of that, "_" is used as a placeholder to get to the second.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    /* ensures the return headers of every request includes the token */
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
// Instantiate the Apollo Client instance to connect to the API endpoint
const client = new ApolloClient({
  // Combining authLink with httpLink
  link: authLink.concat(httpLink),
  // Instantiate a new cache object
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Enable entire app to interact with the Apollo Client instance
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            
            <Route path='Login' element={<Login setUser={setUser}></Login>} />
            <Route path='Dashboard' element={<ProtectedRoute user={user}>
                <Dashboard user={user} /> 
              </ProtectedRoute>
            }
          />
           <Route path='Sign' element={<Sign setUser={setUser}></Sign>} />
            <Route path='Dashboard' element={<ProtectedRoute user={user}>
                <Dashboard user={user} /> 
              </ProtectedRoute>
            }
           />
            <Route path='Blog' element={<SharedBlogLayout />}>
            <Route index element={<Blog />} />
            <Route path=':BlogId' element={<SinglePost />} />
            </Route>

            <Route path="Submit" element={<Submit />} />
            <Route path="Contact" element={<Contact />} /> 
            {/* <Route exact path="/" component={SearchCrimes} />
            <Route exact path="/saved" component={SavedSamurais} />  */}
            <Route path="*" element={<Error />} />
          </Routes>
        </>
        <>
        <main />
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <ContactForm></ContactForm>
          </>
     
     </>
      </Router>
    </ApolloProvider>
  );
}

export default App;










