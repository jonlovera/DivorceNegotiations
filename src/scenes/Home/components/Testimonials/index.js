import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Skills from './components/Skills';
// import Sections from './components/Sections';

export default class Testimonials extends Component {
    render() {
        let info = this.props.info,
            testimonials = info.map((testimonial, index) => {
                return (
                    <div key={index}>
                        <div style={{
                            margin: "0 45px",
                            padding: "40px 20px",
                            borderTop: "2px solid #fcc60a",
                            borderBottom: "2px solid #fcc60a"
                        }}>
                            <span className="color-gray lighter">{'"' + testimonial.description + '"'}</span>
                            <br/>
                            <br/>
                            <span>{testimonial.name}</span>
                        </div>
                    </div>
                );
            }),
            settings = {
                dots: true,
                infinite: true,
                speed: 500,
                arrows: false,
                centerPadding: 220,
                pauseOnHover: false,
                responsive: [
                    {
                        breakpoint: 601,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 100000,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2}
                    }
                ]
            };
        return (
            <Row className="background-primary">
                <Col s={12} m={10} l={6} className="offset-m1 offset-l3">
                    <div className="center-align">
                        <div className="box-title no-border">
                            <span>Testimonials</span>
                            <div className="border"></div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {testimonials}
                    </Slider>
                </Col>
            </Row>
        )
    }
}
