import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Gallery from './components/pages/gallery';
import Overview from './components/pages/overview';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header className="App-header"/>
          
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/overview' component={Overview} />
        
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
