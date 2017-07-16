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
                <Col  s={10} l={6} className="offset-s1 offset-l3">
                    {/*s={12} m={8} l={6} className="offset-m2 offset-l3"*/}
                    <div className="center-align">
                        <div className="box-title no-border">
                            <span>Frequent asked questions</span>
                            <div className="border"></div>
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
