import React, {Component} from 'react';
import SignUpForm from '../components/SignUpForm.js';
import { Redirect } from 'react-router-dom';
import UserAPI from "../services/api/UserAPI";
import Validate from "../services/Validate";

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
                phone: '',
                phonePrefix: ''
            },
            complete: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    //@param {object} event - the JavaScript event object
    async onSubmit(event) {
        event.preventDefault();

        const user = this.state.user;

        const checkResult = await Validate.checkUser(user);
        if (!checkResult.success) {
            this.setState({errors: checkResult.errors});
            return;
        }

        let response = await UserAPI.register(user);

        if (response.status === 200) {
            this.setState({
                errors: {},
                complete: true,
            });
        } else {
            let errors = {};
            response.json().then(json => {
                errors.summary = json.errors;

                this.setState({
                    errors: errors
                });
            });
        }
    }

    render() {
        if (this.state.complete) {
            return <Redirect to="/login" />
        }
        return (
            <SignUpForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }
}

export default SignUpPage;