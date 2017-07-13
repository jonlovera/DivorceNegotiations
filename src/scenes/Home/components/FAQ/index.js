import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

// import Skills from './components/Skills';
// import Sections from './components/Sections';

export default class FAQ extends Component {
    render() {
        let questions = this.props.info.map((question, index) => {
            return (
                <div key={index}>
                    <b>Q:&nbsp;&nbsp;&nbsp;{question.question}</b>
                    <br/>
                    <b>A:&nbsp;&nbsp;&nbsp;</b>
                    <span className="color-gray">{question.answer}</span>
                    <br/>
                    &nbsp;
                </div>
            )

        });
        return (
            <Row>
                <Col s={12} m={8} l={6} className="offset-m2 offset-l3">
                    <div className="center-align">
                        <div className="box-title no-top">
                            <span>Frequent asked questions</span>
                        </div>
                    </div>
                    <div className="FAQ">
                        {questions}
                    </div>
                </Col>
            </Row>
        )
    }
}
