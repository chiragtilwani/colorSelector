import {useState} from 'react'

function DraggableColorBox(props){
    const [cName]=useState(props.clrName)
    return <div style={{backgroundColor:props.bgclr,width:'20%',height:'25%'}}>
    <div>
        <span>{cName}</span>

    </div>
</div>

}

export default DraggableColorBox;