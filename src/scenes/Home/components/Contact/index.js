import React, { Component, PropTypes } from 'react';
import { Row, Col, Button } from 'react-materialize';

import ContactForm from './components/ContactForm';
import jsonData from 'json';

export default class Contact extends Component {
  render() {
    const info = jsonData.contact;

    return (
      <Row className="no-margin">
        <Col s={10} l={6} className="offset-s1 offset-l3">
          <div className="center-align">
            <div className="box-title no-border">
              <span>Get in contact with us</span>
              <div className="border" />
            </div>
          </div>
          <h5 className="color-gray center-align">
            Call us &nbsp;
            <a href={`tel://${info.phone.replace(/[^\x00-\x7F]/g, '')}`} className="color-gray">
              <b
                style={{
                  fontSize: '20px',
                  color: '#989ca0',
                }}
              >{` ${info.phoneBeautified}`}</b>
            </a>
            <br />
            <br />
            Or
            <br />
            <br />
            Let us get in touch with you, just fill and send us your details below.
          </h5>
        </Col>
        <Col s={12} m={10} l={6} className="offset-m1 offset-l3 no-padding">
          <ContactForm />
        </Col>
      </Row>
    );
  }
}
