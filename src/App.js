import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import {favicon} from './images/favicon.png';

function App() {
  return (
    <div>
         <Header></Header>
         <Shop></Shop>
    </div>
  );
}

export default App;