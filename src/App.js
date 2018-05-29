import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Gallery from './components/pages/gallery';
import Overview from './components/pages/overview'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header"/>
        <Overview />
      
        <Footer />

      </div>
    );
  }
}

export default App;
