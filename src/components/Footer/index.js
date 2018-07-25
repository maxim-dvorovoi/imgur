import React, {Component} from 'react'
import './style.css'
import logo from '../../img.jpg'

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
	            <div className="FooterBlock">
	                <div>Максим Дворовой</div>
	                <img src={logo} alt="cool"/>
	            </div>
            </footer>
        )
    }
}

export default Footer
