import { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import {SortableElement} from 'react-sortable-hoc'
import useStyles from './styles/DraggableColorBoxStyles'




const DraggableColorBox=SortableElement((props)=>{
    const [cName] = useState(props.clrName)
    const classes = useStyles(props);

    function handleClick() {
        const newColorArray=[]
        props.colorArray.forEach(c=>{
            if(c.color!==props.id){
                newColorArray.push(c)
            }
        })
        props.handleDeleteColor(newColorArray)
    }

    return <div className={classes.container}>
        <div className={classes.nameTrashBtn}>
            <span>{cName}</span>
            <FaTrash className={classes.trashBin} onClick={handleClick} />
        </div>
    </div>

})

// function DraggableColorBox(props) {
//     const [cName] = useState(props.clrName)
//     const classes = useStyles(props);

//     function handleClick() {
//         const newColorArray=[]
//         props.colorArray.forEach(c=>{
//             if(c.color!==props.id){
//                 newColorArray.push(c)
//             }
//         })
//         props.handleDeleteColor(newColorArray)
//     }

//     return <div className={classes.container}>
//         <div className={classes.nameTrashBtn}>
//             <span>{cName}</span>
//             <FaTrash className={classes.trashBin} onClick={handleClick} />
//         </div>
//     </div>

// }

export default DraggableColorBox;