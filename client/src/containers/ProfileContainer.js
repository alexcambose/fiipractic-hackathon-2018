import React, { Component } from 'react'

import ProfileBio from '../components/profile/ProfileBio';
import ProfileCover from '../components/profile/ProfileCover';
import ProfileGeneral from '../components/profile/ProfileGeneral';
import ProfileAchievments from '../components/profile/ProfileAchievments';
import Post2 from '../components/Post';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { create, getAllPosts } from '../redux/actions/post';
import { getUserByUsername } from '../redux/actions/user';

class ProfileContainer extends Component {

  state = {
    content: '',
    type: 1,
    errors: [],
  }

  componentDidMount () {
    this.props.getUserByUsername(this.props.match.params.username); // and posts
  }

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
      this.props.create(this.state.content, this.state.type);
      this.props.getAllPosts();     
      this.setState({
        content: ''
      });
    }
  }


  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  render() {
    let img = 'https://i.imgur.com/GcP71BP.png';
    let bio = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem, soluta temporibus veniam obcaecati voluptatum voluptas iusto deserunt, quae molestias minus natus recusandae quos facilis et eaque ad non! Quidem voluptate ducimus molestiae nostrum at error quo reprehenderit laborum quae! '
    const { user, currentUser, posts } = this.props;
    return (
      <React.Fragment>
        <div className="container">  
          <ProfileCover cover={img} />
          <div className="profile-body">
            <div className="profile-leftside">
              <ProfileGeneral />
              <ProfileBio bio={bio} />    
              <ProfileAchievments />            
            </div>
            <div className="profile-rightside"> 
              <div className="profile-posts">
                {
                  this.props.match.params.username == user.username ? (
                    <div className="box create-post">
                      <form onSubmit={this.handleSubmit}>
                        <div className="create-title">
                          Creeaza o postare
                        </div>
                        <TextField
                          hintText="Continut"
                          fullWidth={true}
                          value={this.state.content}
                          name="content"
                          rows={2}
                          rowsMax={4}
                          onChange={this.handleChange}
                          errorText={this.state.errors[0]}                            
                        /><br />
                        <RaisedButton type="submit" className="create-post-btn" backgroundColor="#2980b9" labelColor="#fff" label="Submit" fullWidth={true} />
                      </form>
                    </div>
                  ) : ''
                }
                {
                  posts.map(post => {
                    return <Post2 post={post} user={currentUser} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts.reverse(),
  user: state.user.user,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { create, getAllPosts, getUserByUsername })(withRouter(ProfileContainer));