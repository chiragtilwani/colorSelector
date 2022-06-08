import notFound from './images/notFound.jpg'
import {Link} from 'react-router-dom'
import './styles/notFound.css'

function NotFound() {
    return (<div className="not-found-container">
        <Link to="/" className="not-found-link">Back To Home</Link>
        <img src={notFound} className="not-found-img" alt="page not found"/>
    </div>)
}

export default NotFound