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
                        Call us {" "}&nbsp;
                        <a href={"tel://" + info.phone} className="color-gray">
                            <b>{" "+info.phoneBeautified}</b>
                        </a>
                        <br/>
                        Or
                        <br/>
                        Let us get in touch with you, just fill and send us your details below.
                    </h5>
                </Col>
                <Col s={12} m={10} l={6} className="offset-m1 offset-l3">
                    <ContactForm/>
                </Col>
                <Col s={12} className="no-padding" style={{
                    position: "relative"
                }}>
                    <Carousel info={info.carousel} backgroundPosition="bottom center"/>
                    <div href="/" className="brand-logo col offset-s1 offset-l2" style={{
                        top: '50%',
                        transform: "translate(0, -50%)",
                        position: 'absolute'
                    }}>
                        <span>
                            <span style={{
                                WebkitFilter: "drop-shadow(1px 1px 2px rgba(33, 33, 33, 0.44)",
                                filter: "drop-shadow(1px 1px 2px rgba(33, 33, 33, 0.44)"
                            }} dangerouslySetInnerHTML={{
                                __html: jsonData.about.getAvatarBigger
                            }}/>
                            <span style={{
                                fontSize: "30px",
                                lineHeight: "30px",
                                marginTop: "14px",
                                textShadow: "1px 1px 2px rgba(33, 33, 33, 0.44)"
                            }} dangerouslySetInnerHTML={{
                                __html: jsonData.about.nameHTML
                            }}></span>
                        </span>
                    </div>
                </Col>
            </Row>
        )
    }
}
