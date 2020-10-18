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
import FilterImage from './components/filter/filter_image';
import BannerCanva from './components/canva/banner-canva';

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
          <Route path='/filter' component={FilterImage} />
          <Route path='/board' component={Board} />
          <Route path='/design' component={Body} />
          {/* <Route path='/banner' component={BannerCanva} /> */}
          <Route path='/' exact component={Home} />

        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
