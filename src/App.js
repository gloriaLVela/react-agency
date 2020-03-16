import React, { Component } from 'react';
import PageWrapper from './components/PaperWrapper';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Portafolio from './components/Pages/Portafolio';
import Service from './components/Pages/Service';
import Team from './components/Pages/Team';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper >
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="contact"
            component={Contact}
          />
          <Route
            path="/portafolio"
            component={Portafolio}
          />
          <Route
            path="/service"
            component={Service}
          />
          <Route
            path="/team"
            component={Team}
          />
        </PageWrapper>
      </Router >
    );
  }

}

export default App;
