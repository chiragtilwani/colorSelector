import React, { Component } from 'react';
import './PaletteCard.css';

class PaletteCard extends Component {
    render() {
        return (
            <div className="palette-card">
                <div className="color-container">
                    {this.props.colors.map(c=><div className="color-box-s" style={{backgroundColor:c.color}}/>)}
                </div>
                <div className="name-share">
                <h3 className="card-name">{this.props.name}</h3>
                </div>
            </div>
        )
    }
}

export default PaletteCard;