import React, {PropTypes, Component} from 'react';
import SignUpForm from '../components/SignUpForm.js';
import {ServerURL} from '../constants/Constants';
import UserAPI from "../services/api/UserAPI";


class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                passportId: '',
                phone: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    //@param {object} event - the JavaScript event object
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    //@param {object} event - the JavaScript event object
    processForm(event) {
        event.preventDefault();
        UserAPI.register(this.state.user);
    }

    render() {
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }

}

export default SignUpPage;