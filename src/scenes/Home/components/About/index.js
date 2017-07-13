import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

// import Skills from './components/Skills';
// import Sections from './components/Sections';

export default class About extends Component {
    render() {
        let info = this.props.info;
        return (
            <Row>
                <Col s={12} m={8} l={6} className="offset-m2 offset-l3">
                    <div className="center-align">
                        <div className="box-title bigger">
                            <span dangerouslySetInnerHTML={{
                                __html: info.nameHTML
                            }}></span>
                        </div>
                    </div>
                    <h5 className="color-gray" dangerouslySetInnerHTML={{
                        __html: info.description
                    }}></h5>
                </Col>
                <Col s={12} className="background-primary">
                    Divorce profiles
                </Col>
            </Row>
        )
    }
}
