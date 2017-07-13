import React, {Component} from 'react';
import jsonData from 'json';
import {Row, Col} from 'react-materialize';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer small background-primary">
                <div className="container"/>
                <div className="footer-copyright">
                    <Row className="container no-margin-bottom">
                        <Col s={6}>
                            <img {...jsonData.about.getAvatar()}/>
                        </Col>
                        <Col s={6} className="right-align">
                            © 2017 {jsonData.about.name}. All rights reserved.
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}
