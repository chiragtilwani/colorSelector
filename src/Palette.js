import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'

class Palette extends Component {
    render() {
        return (
            <div className="palette">
                {/* header comes here */}
                <div className="palette-colors">
                    {this.props.colors.map(c=><ColorBox background={c} key={c.name}/>)}
                </div>
                {/* footer comes here */}
            </div>
        )
    }
}

export default Palette;