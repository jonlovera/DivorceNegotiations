import React, {Component, PropTypes} from 'react';
import {Row, Col, Button, Input} from 'react-materialize';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            formErrors: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: ''
            },
            firstNameValid: false,
            lastNameValid: false,
            phoneNumberValid: false,
            emailValid: false,
            formValid: false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        }, () => {
            this.validateField(name, value)
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let phoneNumberValid = this.state.phoneNumberValid;
        let emailValid = this.state.emailValid;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.length >= 6;
                fieldValidationErrors.firstName = firstNameValid
                    ? ''
                    : 'First name is too short';
                break;
            case 'lastName':
                lastNameValid = value.length >= 6;
                fieldValidationErrors.lastName = lastNameValid
                    ? ''
                    : 'Last name is too short';
                break;
            case 'phoneNumber':
                phoneNumberValid = value.length >= 6;
                fieldValidationErrors.phoneNumber = phoneNumberValid
                    ? ''
                    : 'Phone number is too short';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid
                    ? ''
                    : value + ' is an invalid email address';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            phoneNumberValid: phoneNumberValid,
            emailValid: emailValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.phoneNumberValid && this.state.emailValid
        });
    }

    render() {
        let info = this.props.info;
        return (
            <Row className="contactForm">
                <Col className="uppercase title" s={12}>
                    Contact information
                </Col>
                <Input label="First Name" s={12} name="firstName" value={this.state.firstName} onChange={(event) => this.handleUserInput(event)} error={this.state.formErrors.firstName}/>
                <Input label="Last Name" s={12} name="lastName" value={this.state.lastName} onChange={(event) => this.handleUserInput(event)} error={this.state.formErrors.lastName}/>
                <Input label="Phone Number" s={12} name="phoneNumber" value={this.state.phoneNumber} onChange={(event) => this.handleUserInput(event)} error={this.state.formErrors.phoneNumber}/>
                <Input type="email" label="Email" s={12} name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} error={this.state.formErrors.email}/>
                <Col className="uppercase title center-align" s={12} style={{
                    marginTop: "1rem"
                }}>
                    <Button disabled={!this.state.formValid}>CONTACT ME</Button>
                </Col>
            </Row>
        )
    }
}
