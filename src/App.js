import './App.css';
import React, { Component } from 'react';
import PaletteArray from './SeedColor'
import { Routes, Route } from 'react-router-dom'
import AllPalette from './AllPalette'
import CreatePalette from './CreatePalette'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<AllPalette paletteArray={PaletteArray} />} />
          <Route path="/palette/:id" element={<CreatePalette />} />
        </Routes>
      </div>
    );
  }
}

export default App;
