import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter } from "react-router-dom";

const styles = {
  underlineStyle: {
    borderColor: "#4994F6"
  },
  floatingLabelFocusStyle: {
    color: "#4994F6"
  }
};

class LoginContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {
    // validation -> check just username
    // if validation
    this.props.history.push("/asd");
    // else alert
  };

  render() {
    return (
      <div className="login-box">
        <div className="left-side"> Lorem ipsum dolor situm. </div>
        <div className="right-side">
          <form onSubmit={this.handleSubmit} method="POST">
            <div className="title">Log in</div>
            <div className="fields">
              <TextField
                hintText="Username"
                name="username"
                underlineFocusStyle={styles.underlineStyle}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                name="password"
                type="password"
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              />
            </div>
            <div>
              <RaisedButton
                type="submit"
                label="Log in"
                backgroundColor="#4994F6"
                fullWidth={true}
                labelColor="white"
              />
              <div className="login-register">sau inregistreaza-te aici</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginContainer);