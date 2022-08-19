import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import reducer,{ initialState } from './reducer';
import { StateProvider } from './StateProvider';
import Login from './Login';
import React from 'react';

function App() {
  return (
      <Router>
         <Header></Header>
        <Routes>
        <Route path="/login" element={<Login/>}></Route>
          <Route  path='/' element={<Home></Home>}></Route>
          <Route  path='/checkout' element={<Checkout></Checkout>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
