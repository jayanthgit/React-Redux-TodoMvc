import React, { Component } from 'react';
import MainSection from './components/MainSection'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <MainSection></MainSection>
      </div>
    );
  }
}

export default App;
