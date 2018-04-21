import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {  
    render() {
        return (
            <React.Fragment>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-start">
                            <div className="navbar-brand">Brand</div>
                            <div className="navbar-search">
                                <FontAwesomeIcon icon="search" />
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="navbar-end">
                            <NavLink to='/' exact className="navbar-item" activeClassName="active-item">Home</NavLink>
                            <div className="navbar-item navbar-dropdown">
                                <span>???</span>
                                <div className="dropdown-content">
                                    <a href="" class="">Profilul meu</a>
                                    <a href="" class="">Grupurile mele</a>
                                    <a href="" class="">Grupurile mele</a>
                                    <a href="" class="">Grupurile mele</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
            
        );
    }
}