import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';

class SettingContainer extends Component {
  render() {
    let {user} = this.props;
    console.log(user.first_name);
    return (
      <div className="container settings-container">
          <div>
            <h3 className="settings-title">Setari</h3>

              <img src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" style={{width: '20%', borderRadius: '999%', boxShadow: '0 0 10px black', marginBottom: '14px'}}/><br/>
                  <input type="file"  /><br/>
            <TextField
            id="text-field-default"
            className="names"
            value={user.first_name}
            /><br />
            <TextField
            className="names"            
            id="text-field-default"
            value={user.last_name}
            /><br />
            <TextField
            id="text-field-default"
            value={user.username}
            /><br />
            <TextField
            id="text-field-default"
            value={user.email}            
            /><br />
            <TextField
            id="text-field-default"
            value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem, soluta temporibus veniam obcaecat"
            /><br />
            <RaisedButton className="btn-settings" label="Editeaza setari" />            
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, {})(SettingContainer)
