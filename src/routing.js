import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';
import Home from '/INDEX/home.js';
import LoginPage from './INDEX/loginpage.js';

render(
    <Router>
        <Route path='/' component={LoginPage}/>
        <Route path='/home' component={Home}/>\
)