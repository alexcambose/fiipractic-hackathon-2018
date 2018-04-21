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
                    <Row>
                        <Col xs={12} sm={3} md={2} lg={1} />
                        <Col xs={6} sm={6} md={8} lg={10} />
                        <Col xs={6} sm={3} md={2} lg={1} />
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, null)(withRouter(GroupContainer));