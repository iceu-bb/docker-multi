import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Page from './Page';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <>
        <div className='App'>
          <header className='App-header'>Welcome</header>
          <Link to='home'>Home</Link>
          <Link to='otherpage'>Otherpage</Link>
        </div>
        <div>
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={Page} />
        </div>
      </>
    </Router>
  );
}

export default App;
