import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox'
import './styles/DraggableColorBox.css'

const DraggableColorList = SortableContainer((props) => {
    return (
        <div className="colorBoxContainer">
            {props.colorArray.map((c, idx) => (
                <DraggableColorBox
                    bgclr={c.color}
                    clrName={c.name}
                    key={c.name}
                    id={c.color}
                    index={idx}
                    colorArray={props.colorArray}
                    handleDeleteColor={props.handleDeleteColor}
                />
            ))}
        </div>
    )
})

export default DraggableColorList;