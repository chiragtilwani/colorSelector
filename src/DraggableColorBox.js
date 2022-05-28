import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { FaTrash } from 'react-icons/fa';
import {SortableElement} from 'react-sortable-hoc'


const useStyles = makeStyles({
    container: {
        backgroundColor: props => props.bgclr,
        width: '20%',
        height: '25%',
        display: 'flex',
        alignItems: 'flex-end',
        '&:hover svg': {
            color: 'white',
            transform: 'scale(1.5)'
        }
    },
    nameTrashBtn: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '.5rem .7rem',
        letterSpacing: '.1rem'
    },
    trashBin: {
        transitionDuration: '.3s',
        '&:hover': {
            color: 'white',
            transform: 'scale(1.5)'
        }
    }
})

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