import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {  
    render() {
        const { user } = this.props;
        console.log(user);
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
                            <NavLink to='/' exact className="navbar-item"><FontAwesomeIcon icon="users" /> &nbsp; Grupurile mele</NavLink>
                            <NavLink to='/' exact className="navbar-item" activeClassName="active-item"><FontAwesomeIcon icon="home" /> &nbsp; Home</NavLink>
                            <div className="navbar-item navbar-dropdown">
                                <span>Salut, {user.first_name + " " + user.last_name}</span>
                                <div className="dropdown-content">
                                    <NavLink to={"/profile/" + user.username} exact className="dropdown-link"><FontAwesomeIcon icon="user" /> &nbsp; Profilul meu</NavLink>
                                    <NavLink to='/settings' exact className="dropdown-link"><FontAwesomeIcon icon="cog" /> &nbsp; Setarile mele</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
            
        );
    }
}