import React, { Component } from 'react';
import Nav from './components/header/nav';
import './Nav.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/social/login';
import SignIn from './components/social/signin';
import Gallery from './components/gallery';
import Help from './components/help';
import Sidebar from './components/sidebar';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/templates/board'
import Body from './components/header/body'
import { Provider } from 'react-redux';
import store from './components/flux/store';
import { loadUser } from './components/flux/action/authAction';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Route path='/gallery' component={Gallery} />
          <Route path='/help' component={Help} />
          <Route path='/board' component={Board} />
          <Route path='/design' component={Body} />
          <Route path='/' exact component={Home} />

        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
