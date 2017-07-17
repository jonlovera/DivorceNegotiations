import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

import ContactForm from './components/ContactForm';
import Carousel from '../Carousel';
import jsonData from 'json';

export default class Contact extends Component {
    render() {
        let info = jsonData.contact;
        return (
            <Row className="no-margin">
                <Col s={10} l={6} className="offset-s1 offset-l3">
                    <div className="center-align">
                        <div className="box-title no-border">
                            <span>Get in contact with us</span>
                            <div className="border"></div>
                        </div>
                    </div>
                    <h5 className="color-gray" dangerouslySetInnerHTML={{
                        __html: info.description
                    }}></h5>
                    <h5 className="color-gray center-align">
                        Call us{" "}
                        <b>{info.phoneBeautified}</b>
                        <br/>
                        Or
                        <br/>
                        Let us get in touch with you, just fill and send us your details below.
                    </h5>
                </Col>
                <Col s={12} m={10} l={6} className="offset-m1 offset-l3">
                    <ContactForm/>
                </Col>
                <Carousel info={info.carousel} backgroundPosition="bottom center"/>
                <div href="/" className="brand-logo col offset-s1 offset-l2" style={{
                    position: 'absolute',
                    height: '100px',
                    bottom: '50vh',
                    marginTop: '-50px'/* account for padding and border if not using box-sizing: border-box; */
                }}>
                    <span>
                        <span dangerouslySetInnerHTML={{
                            __html: jsonData.about.getAvatarBigger
                        }}/>
                        <span style={{
                            fontSize: "30px",
                            lineHeight: "30px",
                            marginTop: "14px"
                        }} dangerouslySetInnerHTML={{
                            __html: jsonData.about.nameHTML
                        }}></span>
                    </span>
                </div>
            </Row>
        )
    }
}
