import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

import ContactForm from './components/ContactForm';
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
                        Call us
                        <b>{info.phoneBeautified}</b>
                        <br/>
                        Or
                        <br/>
                        Let us get in touch with you, just fill and send us your details below.
                    </h5>
                    <ContactForm/>
                </Col>
                <Col className='row no-margin' style={{
                    backgroundImage: `url(${info.getImage().src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '80vh',
                    position: 'relative'
                }}>
                    <div href="/" className="brand-logo col offset-s1 offset-l2" style={{
                        position: 'absolute',
                        top: '50%',
                        height: '100px',
                        marginTop: '-50px'/* account for padding and border if not using box-sizing: border-box; */
                    }}>
                        <span>
                            <img {...jsonData.about.getAvatar()} height="60px" width="108.28px"/>
                            <span style={{
                                fontSize: "26px",
                                lineHeight: "26px",
                                marginTop: "4px"
                            }} dangerouslySetInnerHTML={{
                                __html: jsonData.about.nameHTML
                            }}></span>
                        </span>
                    </div>
                    {/*<img {...info.getImage()} style={{
                        width: "100%",
                        height: "initial"
                    }}/>*/}
                </Col>
            </Row>
        )
    }
}
