import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

import ContactForm from './components/ContactForm';

export default class Contact extends Component {
    render() {
        let info = this.props.info;
        return (
            <Row className="no-margin">
                <Col s={12} m={8} l={6} className="offset-m2 offset-l3">
                    <div className="center-align">
                        <div className="box-title no-top">
                            <span>Get in contact with us</span>
                        </div>
                    </div>
                    <h5 className="color-gray" dangerouslySetInnerHTML={{
                        __html: info.description
                    }}></h5>
                    <h5 className="color-gray center-align">
                        Call us <b>{info.phoneBeautified}</b>
                        <br/>
                        Or
                        <br/>
                        Let us get in touch with you, just fill and send us your details below.
                    </h5>
                    <ContactForm />
                </Col>
                <img {...info.getImage()} style={{width: "100%", height: "initial"}}/>
            </Row>
        )
    }
}
