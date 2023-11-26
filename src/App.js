import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Welcome from './Pages/Welcome';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
    <Helmet>
        <meta name="description" content="Phoenix Token | The Rise From Ashes" />
        <title>Phoenix Token</title>
    </Helmet>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
    </div>
  );
}


export default App;

// backgroundImage: `url(${image1})`,
