import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Admin from './component/admin/Main';
import Error from './component/Error';
import Navigation from './component/Navigation';
import  AdminProducts from './component/productList/AdminProducts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
        <Switch>
        <Route  path="/" component={Home} exact/>
         <Route  path="/about" component={About}/>
         <Route  path="/contact" component={Contact}/>
         <Route  path="/admin" component={Admin}/>
         <Route path="/adminProducts" component= {AdminProducts} />
         <Route   component={Home}/>
        </Switch></div>
      
        
      </BrowserRouter>
    );
  }
}

export default App;
