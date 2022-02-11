import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state={level:500}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(newLevel){
        this.setState({level:newLevel})
    }
    render() {
        return (
            <div className="palette">
                <Slider defaultValue={this.state.level} min={100} max={900} step={100} onAfterChange={this.handleChange}/>
                {/* header comes here */}
                <div className="palette-colors">
                    {this.props.palette.colors[this.state.level].map(c=><ColorBox background={c.hex} name ={c.name} key={c.name}/>)}
                </div>
                {/* footer comes here */}
            </div>
        )
    }
}

export default Palette;