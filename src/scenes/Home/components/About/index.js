import React, { Component, PropTypes } from 'react';
import { Row, Col, Button } from 'react-materialize';

// import Skills from './components/Skills';
// import Sections from './components/Sections';

export default class About extends Component {
  render() {
    let info = this.props.info,
      profiles = info.profiles.map((profile, index) => (
        <Col s={12} m={8} l={4} key={index} className="offset-m2 profile">
          <Col
            s={3} className="center-align" dangerouslySetInnerHTML={{
              __html: profile.icon,
            }}
          />
          <Col s={9} className="info">
            <span className="title">{profile.title}</span>
            <br />
            <span className="color-gray light">{profile.description}</span>
          </Col>
        </Col>
                ));

    return (
      <Row>
        <Col s={10} l={8} className="offset-s1 offset-l2">
          <div className="center-align">
            <div className="box-title bigger">
              <span
                dangerouslySetInnerHTML={{
                  __html: info.nameHTML,
                }}
              />
            </div>
          </div>
          <h5
            className="color-gray" dangerouslySetInnerHTML={{
              __html: info.description,
            }}
          />
        </Col>
        <Col s={12} className="background-primary profiles">
          <Col s={10} l={10} className="offset-s1 offset-l1">
            <h4 className="SFNS-Display">Divorce profiles</h4>
          </Col>
          <Col s={10} l={10} className="offset-s1 offset-l1">
            {profiles}
          </Col>
          <Col s={10} l={10} className="offset-s1 offset-l1 color-gray lighter">
                        For <b>Volatile</b> and <b>Difficult</b> profiles, we recommend you seek legal advise.
                    </Col>
        </Col>
      </Row>
    );
  }
}
