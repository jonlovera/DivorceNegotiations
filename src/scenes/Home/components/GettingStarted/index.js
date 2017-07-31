import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

import jsonData from 'json';

export default class GettingStarted extends Component {
    render() {
        let info = jsonData.gettingStarted;
        return (
            <Row className="no-margin">
                <Col s={10} l={8} className="offset-s1 offset-l2">
                    <div className="center-align">
                        <div className="box-title no-border">
                            <span>Getting started</span>
                            <div className="border"></div>
                        </div>
                    </div>
                    <h5 className="color-gray" dangerouslySetInnerHTML={{
                        __html: info.description
                    }}></h5>
                </Col>
            </Row>
        )
    }
}
