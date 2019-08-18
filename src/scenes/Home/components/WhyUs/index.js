import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-materialize';

// import Skills from './components/Skills';
// import Sections from './components/Sections';

export default class WhyUs extends Component {
  render() {
    const info = this.props.info;
    return (
      <Row>
        <Col s={12} l={10} className="offset-l1 no-padding">
          <div className="center-align">
            <div className="box-title no-border">
              <span>Why us?</span>
              <div className="border" />
            </div>
          </div>
          <div className="center-align">
            <img {...info.getImage()} style={{ width: '100%', height: 'initial' }} />
          </div>
        </Col>
        <Col s={10} l={8} className="offset-s1 offset-l2">
          <h5
            className="color-gray" dangerouslySetInnerHTML={{
              __html: info.description,
            }}
          />
        </Col>
      </Row>
    );
  }
}
