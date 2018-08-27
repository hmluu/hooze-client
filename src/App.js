import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import NotFound from './components/NotFound';

import Friends from './containers/Friends';
import ViewFriend from './containers/ViewFriend';
import AddFriend from './containers/AddFriend';
import EditFriend from './containers/EditFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className='container'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/friends' component={Friends} />
            <Route exact path='/friends/add' component={AddFriend} />
            <Route path='/friends/:id/edit' component={EditFriend} />
            <Route path='/friends/:id' component={ViewFriend} />
            <Route path="*" component={NotFound} />
          </Switch>
     
        </main>
      </div>
    );
  }
}

export default App;
