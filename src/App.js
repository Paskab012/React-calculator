import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <section className="content">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/Calculator"
              element={<Calculator className="calculator" />}
            />
            <Route
              path="/Quote"
              element={<Quote />}
            />
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
