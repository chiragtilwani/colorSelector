import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AllPalette extends Component {
    render() {
        return (
            <div className="AllPalette">
                <h1>Color<span>Selector</span></h1>

                {this.props.paletteArray.map(p => <div><Link to={`/palette/${p.id}`}>{p.paletteName}</Link></div>)}

            </div>
        )
    }
}

export default AllPalette;