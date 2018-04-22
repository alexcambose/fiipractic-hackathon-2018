import React from 'react';
import {DatePicker, RaisedButton, TextField} from "material-ui";
import {createPost} from "../../redux/actions/group";
import connect from "react-redux/es/connect/connect";

class AddContentType extends React.Component {
    state = {
        content: 'ceva ceva altceva',
        deadline: null,
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
            this.props.createPost(this.props.urlname, this.state.content, 2, this.state.deadline);
            this.setState({ content: '', deadline: null });
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
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
                />
                <DatePicker hintText="Termen limita" value={this.state.deadline} onChange={(a, date) => this.setState({ deadline: date })}/>
                <RaisedButton type="submit" className="create-post-btn" backgroundColor="#2980b9" labelColor="#fff" label="Submit" fullWidth={true} />
            </form>
        );
    }
}

export default connect(null, { createPost })(AddContentType);