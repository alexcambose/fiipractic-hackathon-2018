import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter, Link } from "react-router-dom";
import validate from "validate.js";
import { connect } from 'react-redux';
import { login } from '../redux/actions/user';

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
        email: "email@email.com",
        password: "123456",
        errors: {},
        isLoading: true
    };

    handleSubmit = async e => {
        e.preventDefault();
        const rules = {
            email: {
                // emailUnique: true,
                email: true,
            },
            password: {
                length: {
                    minimum: 6,
                    maximum: 30,
                },
            },
        };
        this.setState({ isLoading: true });
        try {
            await validate.async(this.state, rules);
            await this.props.login(this.state.email, this.state.password);
            this.setState({ errors: {}, isLoading: false });
        } catch (errors) {
            this.setState({ errors, isLoading: false });
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


  render() {
    let { errors, email, password }= this.state;
    return (
      <div className="login-box">
        <div className="left-side"><em>Invata cu stil <br/> Sa fii versatil</em></div>
        <div className="right-side">
          <form onSubmit={this.handleSubmit} method="POST">
            <div className="title">Log in</div>
            <div className="fields">
              <TextField
                hintText="E-mail"
                value={email}
                name="email"
                underlineFocusStyle={styles.underlineStyle}
                errorText={errors.email}
                onChange={this.handleChange}              
              />
              <TextField
                hintText="Password"
                value={password}
                floatingLabelText="Password"
                name="password"
                type="password"
                underlineFocusStyle={styles.underlineStyle}
                errorText={errors.password}                
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                onChange={this.handleChange}                
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
              <div className="login-register"> <Link to="/register">sau inregistreaza-te aici</Link></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {
  login
})(LoginContainer);
