import React, {Component} from 'react';
import PageWrapper from './components/PaperWrapper';
import Home from './components/Pages/Home';


class App extends Component {
  render() {
    return (
      <PageWrapper >
        <Home />
        <h1>Hello</h1>
      </PageWrapper>
    );
  }

}

export default App;
