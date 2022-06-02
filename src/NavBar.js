import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/NavBar.css'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';


class NavBar extends Component {
    render() {
        
        return (
            <header className="header">
                <div className="slider-container">
                    <Link to='/' className="logo">Color<span className="selector">Selector</span></Link>
                    {this.props.showSlider?<div className="slider-p">
                        <p>Level : {this.props.level}</p>
                    </div>:""}
                    {this.props.showSlider?<div className="slider">
                        <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.handleChange} />
                    </div>:""}
                </div>

                <div className="select-container">

                    <InputLabel variant="standard" htmlFor="uncontrolled-native" className="label" style={{width:'40%'}}>
                        Format:
                    </InputLabel>
                    <NativeSelect
                        defaultValue="hex"
                        inputProps={{
                            name: 'Format',
                            id: 'uncontrolled-native',
                        }}
                        onChange={this.props.handleFormatChange}
                        style={{width:'60%'}}
                    >
                        <option value="hex" onClick={this.handleClick} className="options">HEX - #ffffff</option>
                        <option value="rgb" onClick={this.handleClick} className="options">RGB - rgb(255,255,255)</option>
                        <option value="rgba" onClick={this.handleClick} className="options">RGBA - rgba(255,255,255,1.0)</option>
                    </NativeSelect>
                </div>

            </header>
        )
    }
}

export default NavBar;