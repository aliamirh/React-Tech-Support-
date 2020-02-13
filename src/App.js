import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Title from './component/Title';
import ReviewList from './component/ReviewList';
import { Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Title} />
      <Route exact path='/reviews' component={ReviewList} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
