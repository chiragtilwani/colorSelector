import './styles/App.css';
import React, { Component } from 'react';
import PaletteArray from './SeedColor'
import { Routes, Route } from 'react-router-dom'
import AllPalette from './AllPalette'
import CreatePalette from './CreatePalette'
import GetIdAndCreatePalette from './GetIdAndCreatePalette'
import NewPalette from './NewPalette'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<AllPalette paletteArray={PaletteArray} />} />
          <Route path="/palette/:id" element={<CreatePalette />} />
          <Route path="/palette/:paletteID/:colorID" element={<GetIdAndCreatePalette/>}/>
          <Route path="/palette/new"element={<NewPalette/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
