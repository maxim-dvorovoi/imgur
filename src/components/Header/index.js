import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

class Header extends Component {
    render () {
        return (
            <header className="header">
                <div className="HeaderBlock">
                    <div className="navList">
                        <Link to="/" className="effect-underline">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Imgur_Title_Screen_Image.svg/2000px-Imgur_Title_Screen_Image.svg.png" />
                        </Link>
                        <div className="CatButtons">
                            <Link to="/"><button className="CatButton"># viral</button></Link>
                            <Link to="/top"><button className="CatButton"># top</button></Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
