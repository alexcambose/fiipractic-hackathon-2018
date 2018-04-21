import React from 'react';
import axios from 'axios';
import config from "../config";
import {withRouter} from "react-router";
import {connect} from "react-redux";

class GroupContainer extends React.Component {
    state = {
        name: "",
    };
    componentDidMount() {
        axios.get(config.apiUrl + 'group', { params: { urlname: this.props.match.params.urlname, token: localStorage.getItem('token') }})
            .then(({ data }) => {
                const group = data.group;
                this.setState({name: group.name});
            });
    }
    render() {
        const { name } = this.state;
        return (
            <React.Fragment>
                <div className="group-header">
                    {name}
                </div>
                <div className="container">
                    <div className="group-sidebar">

                    </div>
                    <div className="group-body">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, null)(withRouter(GroupContainer));