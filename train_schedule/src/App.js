import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTrainsPage from './components/AllTrainsPage';
import SingleTrainPage from './components/SingleTrainPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={first} />
          <Route path="/train/:trainId" component={second} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
