import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

// import Skills from './components/Skills';
// import Sections from './components/Sections';

export default class WhyUs extends Component {
    render() {
        let info = this.props.info;
        return (
            <Row>
                <Col s={12} m={8} l={8} className="offset-m2 offset-l2">
                    <div className="center-align">
                        <div className="box-title no-top">
                            <span>Why us?</span>
                        </div>
                    </div>
                    <div className="center-align">
                        <img {...info.getImage()} style={{width: "100%", height: "initial"}}/>
                    </div>
                    <Col s={8} className="offset-s2">
                        <h5 className="color-gray" dangerouslySetInnerHTML={{
                            __html: info.description
                        }}></h5>
                    </Col>
                </Col>
            </Row>
        )
    }
}
