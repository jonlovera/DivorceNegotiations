import React, {Component, PropTypes} from 'react';
import {Row, Col, Button, Input} from 'react-materialize';

export default class ContactForm extends Component {
    render() {
        let info = this.props.info;
        return (
            <Row className="contactForm">
                <Col className="uppercase title" s={12}>
                    Contact information
                </Col>
                <Input label="First Name" s={12}/>
                <Input label="Last Name" s={12}/>
                <Input label="Phone Number" s={12}/>
                <Input type="email" label="Email" s={12}/>
                <Col className="uppercase title center-align" s={12} style={{marginTop: "1rem"}}>
                    <Button disabled>CONTACT ME</Button>
                </Col>
            </Row>
        )
    }
}
