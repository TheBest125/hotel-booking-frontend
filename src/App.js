import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayFullCities from './components/cities/cities';
import configureStore from './redux/configureStore';

function App() {
  return (
    <Provider store={configureStore}>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayFullCities />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
