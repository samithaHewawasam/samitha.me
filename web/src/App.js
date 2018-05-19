import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider, Query } from "react-apollo";
import 'semantic-ui-css/semantic.min.css';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Profile from './components/profile'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
          <div>
            <Route exact path="/" component={Profile}/>
          </div>
        </Router>
    </ApolloProvider>
    );
  }
}

export default App;
