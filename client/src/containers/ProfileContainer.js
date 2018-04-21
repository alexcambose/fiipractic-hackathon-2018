import React, { Component } from 'react'

import ProfileBio from '../components/profile/ProfileBio';
import ProfileCover from '../components/profile/ProfileCover';
import ProfileGeneral from '../components/profile/ProfileGeneral';
import ProfileAchievments from '../components/profile/ProfileAchievments';
import Post from '../components/Post';

export default class ProfileContainer extends Component {
  render() {
    let img = 'https://i.imgur.com/GcP71BP.png';
    let bio = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem, soluta temporibus veniam obcaecati voluptatum voluptas iusto deserunt, quae molestias minus natus recusandae quos facilis et eaque ad non! Quidem voluptate ducimus molestiae nostrum at error quo reprehenderit laborum quae! '
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
                <Post />
                <Post />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}