import { generatePalette } from './colorHelper'
import { useParams } from 'react-router-dom'
import Palette from './Palette'
import './styles/CreatePalette.css'

function CreatePalette(props) {
    const { id } = useParams();
    const foundPalette = props.paletteArray.find(p => p.id === id);
    const generatedPalette = generatePalette(foundPalette)
    return (
        <div className="create-palette">
            <Palette palette={generatedPalette} />
        </div>
    )
}

export default CreatePalette