import React, { Component } from 'react';
import PageWrapper from './components/PaperWrapper';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';

import AdminWrapper from './components/AdminWrapper';

class App extends Component {
  render() {
    return (
      <Router>
      <PageWrapper>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/admin"
          render={props => (
            <Login />
          )}
        />

        <Route
          exact={true}
          path="/"
          render={props => (
            <PageWrapper >
              <Home {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path="/about"
          render={props => (
            <PageWrapper >
              <About {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/contact"
          render={props => (
            <PageWrapper >
              <Contact {...props} />
            </PageWrapper>
          )}
        />
      </Router>
    );
  }

}

export default App;
