import React, {Component, PropTypes} from 'react';
import {Row, Col, Button, Input} from 'react-materialize';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
            formValid: false,
            formSubmitted: false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
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
                if (!value) {
                    firstNameValid = false;
                    fieldValidationErrors.firstName = "";
                } else {
                    firstNameValid = value.match(/^[a-z ,.'-]+$/i);
                    fieldValidationErrors.firstName = firstNameValid
                        ? ''
                        : 'First name must not contain numbers';
                }
                break;
            case 'lastName':
                if (!value) {
                    lastNameValid = false;
                    fieldValidationErrors.lastName = "";
                } else {
                    lastNameValid = value.match(/^[a-z ,.'-]+$/i);
                    fieldValidationErrors.lastName = lastNameValid
                        ? ''
                        : 'Last name must not contain numbers';
                }
                break;
            case 'phoneNumber':
                if (!value) {
                    phoneNumberValid = false;
                    fieldValidationErrors.phoneNumber = "";
                } else {
                    phoneNumberValid = value.match(/^\+?\d+$/i);
                    fieldValidationErrors.phoneNumber = phoneNumberValid
                        ? ''
                        : value + ' is not a valid phone number';

                    if (!fieldValidationErrors.phoneNumber) {
                        phoneNumberValid = value.length >= 6;
                        fieldValidationErrors.phoneNumber = phoneNumberValid
                            ? ''
                            : 'Phone number is too short';
                    }
                }
                break;
            case 'email':
                if (!value) {
                    emailValid = false;
                    fieldValidationErrors.email = "";
                } else {
                    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    fieldValidationErrors.email = emailValid
                        ? ''
                        : value + ' is an invalid email address';
                }
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

    submitForm(e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: "/php/sendMail.php",
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                url: ''
            },
            dataType: "text",
            success: (resultData) => {
                this.setState({formSubmitted: true});
            },
            error: (err) => {
                if(window.location.hostname == 'jonlov.github.io')
                    this.setState({formSubmitted: true});
            }
        });
    }

    render() {
        let info = this.props.info,
            checkIcon = `<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="DN---Annotations" transform="translate(-648.000000, -3828.000000)">
                            <g id="Contact-form---Section" transform="translate(0.000000, 1521.000000)">
                                <g id="C.F.---Succesfull-messaging" transform="translate(90.000000, 2186.000000)">
                                    <g id="Group-6" transform="translate(268.000000, 2.000000)">
                                        <g id="Group-2" transform="translate(139.000000, 120.000000)">
                                            <g id="Group" transform="translate(152.000000, 0.000000)">
                                                <g id="Group-9">
                                                    <circle id="Oval" stroke="#7ED321" stroke-width="2" cx="20" cy="20" r="20"></circle>
                                                    <g id="Group-4" transform="translate(20.000000, 19.500000) rotate(37.000000) translate(-20.000000, -19.500000) translate(13.000000, 5.000000)" fill="#7ED321">
                                                        <polygon id="Rectangle-12" points="1.52766688e-13 23 13.5761677 23.5587184 13.5761677 28.5587184 1.52766688e-13 28"></polygon>
                                                        <polygon id="Rectangle-12" transform="translate(11.047196, 14.110675) rotate(-90.000000) translate(-11.047196, -14.110675) " points="-2.45222776 11.4401675 24.5466193 11.7811819 24.5466193 16.7811819 -2.45222776 16.4401675"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`,
            content;

        if (this.state.formSubmitted) {
            content = <div className="message">
                <div>
                    <span dangerouslySetInnerHTML={{
                        __html: checkIcon
                    }}/>
                    <br/>
                    <br/>
                    <br/>
                    Thank you for your message.
                    <br/><br/>
                    One of our team will be in touch with you shortly.
                </div>
            </div>;
        };

        return (
            <form onSubmit={this.submitForm}>
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
                        <Button disabled={!this.state.formValid || this.state.formSubmitted}>CONTACT ME</Button>
                    </Col>
                    <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
                        {content}
                    </CSSTransitionGroup>
                </Row>
            </form>
        )
    }
}
