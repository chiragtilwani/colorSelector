import './App.css';
import React,{Component} from 'react';
import Palette from './Palette'
import PaletteArray from './SeedColor'
import {generatePalette} from './colorHelper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(PaletteArray[1])}/>
      </div>
    );
  }
}

export default App;
