import './App.css';
import React,{Component} from 'react';
import Palette from './Palette'
import PaletteArray from './SeedColor'
import {generatePalette} from './colorHelper'

class App extends Component {
  render() {
    console.log(generatePalette(PaletteArray[4]))
    return (
      <div className="App">
        <Palette palette={generatePalette(PaletteArray[4])}/>
      </div>
    );
  }
}

export default App;
