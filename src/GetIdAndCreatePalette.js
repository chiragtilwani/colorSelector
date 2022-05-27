import React from 'react';
import {useParams} from 'react-router-dom'
import SingleColorPalette from './SingleColorPalette'
import { generatePalette } from './colorHelper'

function GetID(props){
    const {paletteID,colorID} =useParams()
    const foundPalette=props.paletteArray.find(p=>p.id===paletteID);
    const palette=generatePalette(foundPalette)
    return(
        <SingleColorPalette colorID={colorID} paletteID={paletteID} palette={palette}/>
    )
}

export default GetID;