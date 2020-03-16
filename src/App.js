import React, { Component } from 'react';
import PageWrapper from './components/PaperWrapper';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './components/Pages/Home';

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
        </PageWrapper>
      </Router >
    );
  }

}

export default App;
