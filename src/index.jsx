import React from 'react';
import { render } from 'react-dom';
import './style.css';



import Header from './components/Header';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';
import Footer from './components/Footer';






const App = () => {
  return (
    <div className="container">
      <Header />
      <Dresses />
      <Shoes />
      <Accessories />
      <Footer />

    </div>
  );
}

render(<App />, document.querySelector('#app'));
