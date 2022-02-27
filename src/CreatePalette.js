import PaletteArray from './SeedColor'
import { generatePalette } from './colorHelper'
import { useParams } from 'react-router-dom'
import Palette from './Palette'
import './CreatePalette.css'

function CreatePalette() {
    const { id } = useParams();
    const foundPalette = PaletteArray.find(p => p.id === id);
    const generatedPalette = generatePalette(foundPalette)
    return (
        <div className="create-palette">
            <Palette palette={generatedPalette} />
        </div>
    )
}

export default CreatePalette