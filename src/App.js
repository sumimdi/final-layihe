import React, { Component } from 'react';
import Main from './Main/Main';
import Product from './Product/Product';
import Login from './Login/Login';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render () {
       return (
            <Routes>
              <Route  path="/" element={<Main />}  />
              <Route  path="/product" element={<Product />}  />
              <Route  path="/login" element={<Login />}  />
            </Routes>
      )
  }

}
