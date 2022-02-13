import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'

import NavBar from './NavBar';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500,format:"hex" }
        this.handleChange = this.handleChange.bind(this)
        this.handleFormatChange = this.handleFormatChange.bind(this)
    }
    handleChange(newLevel) {
        this.setState({ level: newLevel })
    }
    handleFormatChange(evt){
        this.setState({format: evt.target.value})
    }
    render() {
        return (
            <div className="palette">

                <NavBar level={this.state.level} handleChange={this.handleChange} handleFormatChange={this.handleFormatChange}/>

                <div className="palette-colors">
                    {this.props.palette.colors[this.state.level].map(c => <ColorBox background={c[this.state.format]} name={c.name} key={c.name} />)}
                </div>
                
                {/* footer comes here */}
            </div>
        )
    }
}

export default Palette;