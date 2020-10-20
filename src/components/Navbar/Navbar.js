import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import img from "../../image/logo.png";
import './Navbar.css'

class Navbar extends Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: ! this.state.clicked})
    }
    render() {
        return(
            <nav className='NavBarItems'>
                <img className="navbar-logo" src={img} alt="logo"></img>
                <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                 {item.title}
                                    
                                    </a> 
                                 </li>
                        )
                        })}
                    
            </ul>
            <i class="fas fa-shopping-bag"></i>
            </nav> 
        )
    }
}

export default Navbar