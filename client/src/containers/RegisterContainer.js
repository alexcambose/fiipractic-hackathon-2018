import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter, Link } from "react-router-dom";
import ValidationErrors from "../components/ValidationErrors";
import validate from "validate.js";

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
        first_name: "",
        last_name: "",
        password: "",
        rpassword: "",
        email: "",
        code: "",
        isLoading: false,
        errors: {},
    };

    handleSubmit = async e => {
        e.preventDefault();
        const rules = {
            username: {
                presence: true,
                length: {
                    minimum: 4,
                    maximum: 30,
                },
            },
            first_name: {
                presence: true,
                length: {
                    minimum: 2,
                    maximum: 50,
                },
            },
            last_name: {
                presence: true,
                length: {
                    minimum: 2,
                    maximum: 50,
                },
            },
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
            rpassword: {
                equality: "password",
            },
            code: {

            }
        };
        this.setState({ isLoading: true });
        try {
            await validate.async(this.state, rules);
            await this.props.register(this.state.username, this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.code);
            this.setState({ errors: {}, isLoading: false });
        } catch (errors) {
            this.setState({ errors, isLoading: false });
        }
        console.log(this.state);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        let errors = this.state.errors;
        return (
            <div className="register-box">
                <div className="left-side"> Lorem ipsum dolor situm. </div>
                <div className="right-side">
                    <form onSubmit={this.handleSubmit} method="POST">
                        <div className="title">Inregistrare</div>
                        <div className="fields">
                            <TextField
                                errorText={errors.username}
                                hintText="Username"
                                name="username"
                                underlineFocusStyle={styles.underlineStyle}
                                onChange={this.handleChange}
                            />
                            <TextField
                                errorText={errors.last_name}
                                hintText="Nume"
                                name="last_name"
                                underlineFocusStyle={styles.underlineStyle}
                                onChange={this.handleChange}
                            />
                            <TextField
                                errorText={errors.first_name}
                                hintText="Prenume"
                                name="first_name"
                                underlineFocusStyle={styles.underlineStyle}
                                onChange={this.handleChange}
                            />
                            <TextField
                                errorText={errors.email}
                                hintText="Email"
                                name="email"
                                underlineFocusStyle={styles.underlineStyle}
                                onChange={this.handleChange}
                            />
                            <TextField
                                errorText={errors.password}
                                hintText="Parola"
                                name="password"
                                type="password"
                                underlineFocusStyle={styles.underlineStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                            />
                            <TextField
                                errorText={errors.rpassword}
                                hintText="Repeta parola"
                                name="rpassword"
                                type="password"
                                underlineFocusStyle={styles.underlineStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                            />
                            <TextField
                                errorText={errors.code}
                                hintText="Cod"
                                name="code"
                                type="text"
                                underlineFocusStyle={styles.underlineStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <RaisedButton
                                type="submit"
                                label="Inregistreaza-te"
                                backgroundColor="#4994F6"
                                fullWidth={true}
                                labelColor="white"
                            />
                            <div className="register-login"> <Link to="/login">sau logheaza-te aici</Link></div>
                        </div>
                    </form>
                    <ValidationErrors errors={errors} />
                </div>
            </div>
        );
    }
}

export default withRouter(LoginContainer);
