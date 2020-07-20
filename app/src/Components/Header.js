import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
           <header>
                <div className="headerMain">
                <nav className="navbar navbar-expand-lg navbar-light">
                 <a  href="/"><img className="logoImage" src='https://aperfectspace.com/images/new-home-logo-black.png' alt='logo' /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-header" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">How it works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" >|</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">List a Space</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Find a Space</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">|</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><b>Sign Up</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><b>Log In</b></a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
           </header>
        )
    }
}

export default Header;