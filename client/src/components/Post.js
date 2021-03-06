import React from 'react';
import {Card, CardActions, CardHeader,  CardText} from 'material-ui/Card';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import axios from 'axios';
import config from "../config";
import {connect} from "react-redux";
import {Chip} from "material-ui";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }
    componentDidMount() {
        if (!this.state.user.first_name) this.fetchUser();
    }
    fetchUser = () => {
            axios.get(config.apiUrl + 'user', {params: { token: localStorage.getItem('token'), id: this.state.user.id }})
                .then(({ data }) => {
                    console.log(data);
                    this.setState({user: data.user});
                })
    };
    toggleLike = async () => {
        axios.put(config.apiUrl + 'post/like', { id: this.state.post._id, token: localStorage.getItem('token') })
            .then(({ data }) => {
                this.setState({ post: data.post });
                location.reload();
            });
    };

    render() {
        const { user, post } = this.state;
        if(!post) return null;
        let borderColor = null;
        if(post.type === 1) borderColor = '#BCB8FF';
        return (
            <Card style={{margin: '10px 14px', border: '1px solid ' + borderColor}} className="profile-post">

                <CardHeader
                    title={user.first_name + " " + user.last_name}
                    subtitle={user.username}
                    avatar="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png"
                />
                <CardText>
                    { post.content }
                    <Chip
                        style={{float: 'right'}}
                    >
                        Continut
                    </Chip>
                </CardText>
                <CardActions>
                    <div className="btn-like">
                        {post.likes.length} <FontAwesomeIcon icon="heart" style={{cursor: 'pointer', color: post.likes.find(e => e === this.props.userId) ? 'red' : 'black', marginLeft: '6px'}} size="lg" onClick={this.toggleLike}/>
                    </div>

                </CardActions>
            </Card>
        );
    }
}

Post.defaultProps = {
    user: {},
};

export default connect(
    state => ({
        userId: state.user.user._id,
    })
)(Post);