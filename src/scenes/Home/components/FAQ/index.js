import React, { Component, PropTypes } from 'react';
import { Row, Col, Button } from 'react-materialize';

// import Skills from './components/Skills';
// import Sections from './components/Sections';

export default class FAQ extends Component {
  render() {
    const questions = this.props.info.map((question, index) => (
      <div key={index}>
        <b>Q:&nbsp;&nbsp;&nbsp;{question.question}</b>
        <br />
        <b>A:&nbsp;&nbsp;&nbsp;</b>
        <span className="color-gray">{question.answer}</span>
        <br />
                    &nbsp;
      </div>
            ));
    return (
      <Row className="no-margin">
        <Col s={10} l={8} className="offset-s1 offset-l2">
          {/* s={12} m={8} l={6} className="offset-m2 offset-l3" */}
          <div className="center-align">
            <div className="box-title no-border">
              <span>Frequent asked questions</span>
              <div className="border" />
            </div>
          </div>
          <div className="FAQ">
            {questions}
          </div>
        </Col>
      </Row>
    );
  }
}
