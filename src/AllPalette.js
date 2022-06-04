import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './styles/AllPalette.css'
import PaletteCard from './PaletteCard'

function AllPalette(props) {

    const navigate = useNavigate()
    return (
        <div className="AllPalette">
            <div  className="heading">
                <h1 className="allPalette-h1">Color<span className="allPalette-span">Selector</span></h1>
                <Link to='/palette/new' className="new-palette">Add Palette</Link>
            </div>


            <div className="cards">
                {props.paletteArray.map(p =>

                    <div onClick={() => { navigate(`/palette/${p.id}`) }} style={{ textDecoration: "none", border: 'none', borderRadius: '1.2rem' }} className="card" key={p.id}>
                        <PaletteCard colors={p.colors} name={p.paletteName} emoji={p.emoji} id={p.id} deletePalette={props.deletePalette} />
                    </div>
                )}
            </div>

        </div>
    )

}

export default AllPalette;

