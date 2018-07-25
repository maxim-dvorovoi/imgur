import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

class Header extends Component {
    render () {
        return (
            <header className="header">
                <div className="HeaderBlock">
                    <div className="navList">
                        <Link to="/" class="effect-underline">iMGUR</Link>
                        <div className="CatButtons">
                            <Link to="/"><button class="CatButton"># viral</button></Link>
                            <Link to="/top"><button class="CatButton"># top</button></Link>
                        </div>
                    </div>
                </div>
                <hr/>
            </header>
        )
    }
}

export default Header
