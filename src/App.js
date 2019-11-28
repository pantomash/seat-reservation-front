import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './containers/homepage/homepage.component';

import './App.css';

class App extends Component {
  
  render() {

    return (
      <div className='App'>
        <Header className='header' currentUser={null} />
        <div className='main_section'>
          <Switch>
            <Route path='/' component={Homepage} />
          </Switch>
        </div>
        <Footer className='footer' />
      </div>
    );
  }
}

export default App;
