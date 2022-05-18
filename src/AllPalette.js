import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles/AllPalette.css'
import PaletteCard from './PaletteCard'

class AllPalette extends Component {
    render() {
        return (
            <div className="AllPalette">
                <Link to='/palette/new' className="new-palette">Create New Palette</Link>
                <h1 className="allPalette-h1">Color<span className="allPalette-span">Selector</span></h1>

                {/* {this.props.paletteArray.map(p => <div><Link to={`/palette/${p.id}`}>{p.paletteName}</Link></div>)} */}
                <div className="cards">
                    {this.props.paletteArray.map(p =>
                        <Link to={`/palette/${p.id}`} style={{ textDecoration: "none" }} className="card" key={p.id}>
                            <PaletteCard colors={p.colors} name={p.paletteName} emoji={p.emoji} id={p.id} />
                        </Link>
                    )}
                </div>

            </div>
        )
    }
}

export default AllPalette;

