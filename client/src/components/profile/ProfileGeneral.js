import React, { Component } from 'react'

import Rating from '../Rating';
import { connect } from 'react-redux';

class ProfileGeneral extends Component {
  render() {
    let img = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
    const { user } = this.props;
    return (
      <div className="profile-general box">
        <div className="profile-image-section">
            <div className="profile-image" style={ { backgroundImage: `url(${img})` } }></div>
        </div>
        <div className="profile-general-fullname">{ user.first_name + " " + user.last_name }</div>
        <div className="profile-general-details">
            <div className="titlul">Profesor de programare defensiva</div>
        </div>
        <div className="contact">
           { user.email }
        </div>
        <div className="rating">
            <Rating score="3" />
        </div>
        <div className="profile-general-follow-btn">
           Evalueaza
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, {})(ProfileGeneral);