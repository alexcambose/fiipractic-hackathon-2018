import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/group';

class AddContentType extends Component {

    state = {
        content: 'ceva ceva ceva',
        errors: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.content.length < 3) {
            this.setState({
                errors: ['Postarea e prea scurta!']
            });
        } else if (this.state.content.length > 3000) {
            this.setState({
                errors: ['Postarea e prea lunga!']
            });
        } else {
            this.props.createPost(this.props.urlname, this.state.content, 1);
            this.setState({ content: '' });
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        hintText="Continut"
                        fullWidth={true}
                        value={this.state.content}
                        name="content"
                        rows={3}
                        rowsMax={4}
                        onChange={this.handleChange}
                        errorText={this.state.errors[0]}
                    /><br />
                    <RaisedButton type="submit" className="create-post-btn" backgroundColor="#2980b9" labelColor="#fff" label="Submit" fullWidth={true} />
                </form>
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        urlname: state.group.urlname,
    })
    , { createPost })(withRouter(AddContentType));