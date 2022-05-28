import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox'

const DraggableColorList=SortableContainer((props)=> {
    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            {props.colorArray.map((c,idx) => (
                <DraggableColorBox
                    className="draggable-clrBox"
                    bgclr={c.color}
                    clrName={props.clrName}
                    key={c.color}
                    id={c.color}
                    index={idx}
                    colorArray={props.colorArray}
                    handleDeleteColor={props.handleDeleteColor}
                />
            ))}
        </div>
    )
})
// const DraggableColorList =SortableContainer((props)=>
//     {props.colorArray.map((c) => (
//         <DraggableColorBox
//           className="draggable-clrBox"
//           bgclr={c.color}
//           clrName={props.clrName}
//           key={c.color}
//           id={c.color}
//           colorArray={props.colorArray}
//           handleDeleteColor={props.handleDeleteColor}
//         />
//       ))}

// )

export default DraggableColorList;