import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import RootLayout from './Container/RootLayout';

function App() {


  return (
    <Router>
      <Switch>
        <RootLayout>
           <Route path='/' component={Home} />
        </RootLayout>
      </Switch>
    </Router>
  );
}

export default App;
