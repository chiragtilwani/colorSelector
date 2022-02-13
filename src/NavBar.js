import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css'
import { Link } from 'react-router-dom'
// Material UI imports
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

class NavBar extends Component {
    render() {
        return (
            <header className="header">
                <div className="slider-container">
                    <Link to='/' className="logo">Color<span className="selector">Selector</span></Link>
                    <div className="slider-p">
                        <p>Level : {this.props.level}</p>
                    </div>
                    <div className="slider">
                        <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.handleChange} />
                    </div>
                </div>
                <div className="select-container">

                            <InputLabel variant="standard" htmlFor="uncontrolled-native" className="label">
                                Format
                            </InputLabel>
                            <NativeSelect
                                defaultValue="hex"
                                inputProps={{
                                    name: 'Format',
                                    id: 'uncontrolled-native',
                                }}
                                onChange={this.props.handleFormatChange}
                            >
                                <option value="hex">HEX - #ffffff</option>
                                <option value="rgb">RGB - rgb(255,255,255)</option>
                                <option value="rgba">RGBA - rgba(255,255,255,1.0)</option>
                            </NativeSelect>
                </div>
            </header>
        )
    }
}

export default NavBar;