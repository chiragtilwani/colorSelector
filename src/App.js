import './styles/App.css';
import React, { Component } from 'react';
import PaletteArray from './SeedColor'
import { Routes, Route } from 'react-router-dom'
import AllPalette from './AllPalette'
import CreatePalette from './CreatePalette'
import GetIdAndCreatePalette from './GetIdAndCreatePalette'
import NewPaletteForm from './NewPaletteForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      paletteArray:PaletteArray
    }
    this.savePalette=this.savePalette.bind(this)
  }

  savePalette(newPalette) {
    console.log(newPalette);
    this.setState({paletteArray:[...this.state.paletteArray,newPalette]})
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<AllPalette paletteArray={this.state.paletteArray} />} />
          <Route path="/palette/:id" element={<CreatePalette paletteArray={this.state.paletteArray}/>} />
          <Route path="/palette/:paletteID/:colorID" element={<GetIdAndCreatePalette paletteArray={this.state.paletteArray}/>}/>
          <Route path="/palette/new"element={<NewPaletteForm savePalette={this.savePalette} paletteArray={this.state.paletteArray} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
