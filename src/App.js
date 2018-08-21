import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ShowBookPage from './Components/ShowBookPage';
import './App.css';
import BookListPage from './Components/BookListPage/BookListPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/booklist/:page/:limit' component={BookListPage} />
          <Route path='/showbook/:id' component={ShowBookPage} />
          <Redirect to='/booklist/0/5' />
        </Switch>
      </Router>
    );
  }
}

export default App;
