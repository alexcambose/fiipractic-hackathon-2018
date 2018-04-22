import React from 'react';
import axios from 'axios';
import config from "../config";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import GroupUsers from "../components/GroupUsers";
import {Paper, RaisedButton} from "material-ui";
import AddPost from "../components/group/AddPost";
import {getGroup} from "../redux/actions/group";
import Post from "../components/Post";

class GroupContainer extends React.Component {
    state = {
        posts: [],
    };
    componentDidMount() {
        this.props.getGroup(this.props.match.params.urlname);

    }
    render() {
        if(!this.props.group) return null;

        const { group, groupUsers, posts } = this.props;
        return (
            <React.Fragment>
                <div className="group-header">
                    <h1 style={{fontSize: '2em'}}>{group.name}</h1>
                </div>
                <div className="container">
                    <div className="group-body">
                        <div className="group-sidebar">
                            <Paper>
                                <GroupUsers users={groupUsers} />
                            </Paper>
                            <RaisedButton label="Adauga teme" fullWidth={true} primary={true} style={{margin: '10px 0'}}/>
                            <RaisedButton label="Adauga chestionare"  fullWidth={true} primary={true} />
                        </div>
                        <div className="group-content">
                            <AddPost />
                            {group.posts.reverse().map((e, i) => <Post post={e}/>)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        group: state.group,
        groupUsers: state.group.groupUsers,
        posts: state.group.posts,
    })
, { getGroup })(withRouter(GroupContainer));