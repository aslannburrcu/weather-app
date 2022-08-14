import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CityWeather from './components/CityWeather';
import Search from './components/Search';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/cityWeather" element={<CityWeather />} />
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
  );
}
export default App;
