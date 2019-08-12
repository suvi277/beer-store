import React, { Component } from 'react'
import '../css/header.css'

class Header extends Component{
    render() {
        return(
            <header className="header clearfix">
                <div className="container">
                    <img src="https://www.brewdog.com/media/logo/default/brewdog-logo.png" alt="logo beers" width="50"/>
                    <h2>Punk Beers</h2>
                </div>
            </header>
        )
    }
}

export default Header;