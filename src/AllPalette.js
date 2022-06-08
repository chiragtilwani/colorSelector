import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import PaletteCard from './PaletteCard'
import './styles/AllPalette.css'
import emptySvg from './images/emptySvg.jpg'

function AllPalette(props) {

    const navigate = useNavigate()

    return (
        <div className="AllPalette">
            <div className="heading">
                <h1 className="allPalette-h1">Color<span className="allPalette-span">Selector</span></h1>
                <Link to='/palette/new' className="new-palette">Add Palette</Link>
            </div>


            <div className="cards">
                {props.paletteArray.map(p =>

                    <div onClick={() => { navigate(`/palette/${p.id}`) }} style={{ textDecoration: "none", border: 'none', borderRadius: '1.2rem' }} className="card" key={p.id}>
                        <PaletteCard colors={p.colors} name={p.paletteName} emoji={p.emoji} id={p.id} deletePalette={props.deletePalette} />
                    </div>
                )}
                {props.paletteArray.length === 0 ? <div className='allPalette-container'>
                    <div className="left">
                        <h1 style={{color:'rgba(51, 45, 45, 0.758)'}}>Palette List Empty. Add <Link to="/palette/new" className="new-palette-link">New Palettes</Link></h1>
                    </div>
                    <div className="right">
                        <img src={emptySvg} className="svg-img" alt="palette list empty"/>
                    </div>
                </div> : null}
            </div>

        </div>
    )

}

export default AllPalette;

