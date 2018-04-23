import React, { Component } from 'react';
import PropTypes from 'proptypes';
import LoginContainer from '../containers/LoginContainer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Redirect } from "react-router";
import axios from 'axios';
import api from "../utils/api";

class Jobs extends Component {
    state = {};
    
    
    render() {
        console.log(api.items);
        if(!localStorage.getItem('token')) return <Redirect to='/login'/>;
        return (
            <section style={{height: "100vh"}} className="jobs-section">
                <Navbar />
                <div className="flex-container">
                    {
                        api.items.map(item => {
                            return (
                                <div className="job-box box">
                                    <div className="job-title">{item.title}</div>
                                    <span dangerouslySetInnerHTML={{__html:`<h1>${item.content}</h1>`}} />
                                </div>
                            )
                        })
                    }
                </div>
                <Footer />
            </section>
        );
    }
}


export default Jobs;