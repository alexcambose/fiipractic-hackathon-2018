import React from 'react';
import {Card, CardActions, CardHeader,  CardText} from 'material-ui/Card';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import axios from 'axios';
import config from "../config";
import {connect} from "react-redux";
import validate from "validate.js/validate";
import {createGroup} from "../redux/actions/group";
import {RaisedButton, TextField} from "material-ui";

class CreateGroupsContainer extends React.Component {
    state = {
        name: 'testname',
        urlname: 'testurlname',
        errors: {},
    };
    handleSubmit = async e => {
        e.preventDefault();
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
            await this.props.createGroup(this.state.name, this.state.urlname);
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
        const { name, urlname, errors } = this.state;
        return (
           <form onSubmit={this.handleSubmit}>
               <TextField
                   hintText="Nume grup"
                   name="name"
                   onChange={this.handleChange}
                   fullWidth={true}
                   value={name}
                   errorText={errors.name}
               />
               <TextField
                   hintText="Url grup"
                   name="urlname"
                   onChange={this.handleChange}
                   fullWidth={true}
                   value={urlname}
                   errorText={errors.urlname}
               />
               <RaisedButton type='submit' label="Creeaza grup" fullWidth={true}></RaisedButton>
           </form>
        );
    }
}

CreateGroupsContainer.defaultProps = {
    user: {},
};

export default connect(
    null,
    { createGroup }
)(CreateGroupsContainer);