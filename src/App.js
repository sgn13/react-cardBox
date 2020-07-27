import React from 'react';
import Nav from './components/header/nav';
import './Nav.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/social/login';
import SignIn from './components/social/signin';
import Gallery from './components/gallery';
import Help from './components/help';
import Sidebar from './components/sidebar';
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path='/gallery' component={Gallery} />
      <Route path='/help' component={Help} />
      <Route path='/design' component={Sidebar} />
      <Route path='/login' component={Login} />
      <Route path='/signin' component={SignIn} />
      <Route path='/' exact component={Home} />

    </BrowserRouter>
  );
}

export default App;
