import React from 'react';
import './App.scss';
//Router
import{BrowserRouter as Router,Route,} from "react-router-dom";
//Components
import Navbar from './components/Navbar';
//pages
import Home from './contents/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
        <Home />
      </Route>
      </div>
    </Router>
  )
}
export default App;