import React,{ Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css'
import {Link} from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <div className="slider-container">
                <Link to='/' className="logo">Color<span className="selector">Selector</span></Link>
                    <div className="slider-p">
                        <p>Level : {this.props.level}</p>
                    </div>
                    <div className="slider">
                    <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.handleChange} />
                    </div>
                </div>
        )
    }
}

export default NavBar;