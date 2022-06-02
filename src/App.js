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
    const savedPalettes=JSON.parse(window.localStorage.getItem('palettes'))
    this.state={
      paletteArray:savedPalettes||PaletteArray
    }
    this.savePalette=this.savePalette.bind(this)
    this.deletePalette=this.deletePalette.bind(this)
  }

  savePalette(newPalette) {
    this.setState({paletteArray:[...this.state.paletteArray,newPalette]},this.storingPalettesToLocalStorage)
  }

  storingPalettesToLocalStorage(){
    window.localStorage.setItem('palettes', JSON.stringify(this.state.paletteArray))
  }

  deletePalette(id){
    this.setState({paletteArray:this.state.paletteArray.filter(p=>p.id!==id)},this.storingPalettesToLocalStorage)
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<AllPalette paletteArray={this.state.paletteArray} deletePalette={this.deletePalette}/>} />
          <Route path="/palette/:id" element={<CreatePalette paletteArray={this.state.paletteArray}/>} />
          <Route path="/palette/:paletteID/:colorID" element={<GetIdAndCreatePalette paletteArray={this.state.paletteArray}/>}/>
          <Route path="/palette/new"element={<NewPaletteForm savePalette={this.savePalette} paletteArray={this.state.paletteArray} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
