import './App.css';
import React,{Component} from 'react';
import Palette from './Palette'
import PaletteArray from './SeedColor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette {...PaletteArray[4]}/>
      </div>
    );
  }
}

export default App;
