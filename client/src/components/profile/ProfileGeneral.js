import React, { Component } from 'react'

import Rating from '../Rating';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import { Rating as Rating2} from 'material-ui-rating';

const { ContentAddCircle, ContentAddCircleOutline, ContentRemove } = require('material-ui/svg-icons');
const { colors } = require('material-ui/styles');
const { FontIcon } = require('material-ui');


class ProfileGeneral extends Component {
  state = {
    open: false,
    stars: 5,
    snackbar: false
  };

  handleStarChange = e => {
    console.log(e);
    this.setState({
      stars: e
    });
  }
  
  handleRequestClose = () => {
    this.setState({
      snackbar: false,
    });
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      snackbar: true
    });
  };
  render() {
    let img = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
    const { user } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    
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
        <div className="profile-general-follow-btn" onClick={this.handleOpen}>
           Evalueaza
        </div>
        <div>
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          <div>
          <Rating2
              onRate={() => console.log('onRate')}
              value={this.state.stars}
              max={5}
              onChange={this.handleStarChange}
              itemIconStyle={{color : colors.green300}}
              iconFilledRenderer={({index}) => <ContentAddCircle color={colors.green500} />}
              iconHoveredRenderer={({index}) => <FontIcon >{index}</FontIcon>}
              iconNormalRenderer={({index}) => <ContentAddCircleOutline color={colors.green500} />}
              tooltipRenderer={({index}) => <span>{index}</span>}
              tooltipPosition='bottom-center'
            />
          </div>
          </Dialog>
          <Snackbar
            open={this.state.snackbar}
            message="Ai votat cu succes!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.currentUser
});

export default connect(mapStateToProps, {})(ProfileGeneral);