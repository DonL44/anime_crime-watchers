import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchsamurais from "./pages/Searchsamurais";
import Savedsamurais from "./pages/Savedsamurais";
import Navbar from "./components/Navbar";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Searchsamurais} />
            <Route exact path="/saved" component={Savedsamurais} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;