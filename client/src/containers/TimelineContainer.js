import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { allPosts } from '../redux/actions/post';
import Post from '../components/Post';


export class TimelineContainer extends Component {

    componentWillMount() {
        this.props.allPosts();
    }

  render() {
    return (
      <div className="container">
        { this.props.posts.map(post => {
            return <Post post={post} />
        }) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    posts: state.post.posts
});

export default connect(mapStateToProps, { allPosts })(withRouter(TimelineContainer))
