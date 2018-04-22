import React from 'react';
import {Card, CardActions, CardHeader,  CardText} from 'material-ui/Card';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import axios from 'axios';
import config from "../config";
import {connect} from "react-redux";
import validate from "validate.js/validate";

class Post extends React.Component {
    state = {
        name: '',
        urlname: '',
    };
    handleSubmit = async () => {
        const rules = {
            name: {
                length: {
                    minimum: 6,
                    maximum: 30,
                },
            },
            urlname: {
                length: {
                    minimum: 6,
                    maximum: 30,
                },
            },
        };
        this.setState({ isLoading: true });
        try {
            await validate.async(this.state, rules);
            await this.props.login(this.state.name, this.state.urlname);
            this.setState({ errors: {}, isLoading: false });
        } catch (errors) {
            this.setState({ errors, isLoading: false });
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { name, urlname } = this.state;
        return (
           <form onSubmit={this.handleSubmit}>
               <TextField
                   hintText="Nume grup"
                   name="name"
                   onChange={this.handleChange}
                   value={name}
               />
               <TextField
                   hintText="Url grup"
                   name="urlname"
                   onChange={this.handleChange}
                   value={urlname}
               />
           </form>
        );
    }
}

Post.defaultProps = {
    user: {},
};

export default connect(
    null,
    { createGroup }
)(Post);