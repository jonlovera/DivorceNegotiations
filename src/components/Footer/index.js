import React, {Component} from 'react';
import {Link, animateScroll} from 'react-scroll';
import jsonData from 'json';
import {Row, Col} from 'react-materialize';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    scrollToTop() {
        animateScroll.scrollToTop();
    }
    updateDimensions() {
        this.setState({width: $(window).width(), height: $(window).height()});
    }

    render() {
        let navbarList = jsonData.navbar.map((item, index) => {
                return (
                    <Link key={index} to={item.id} smooth={true} style={{
                        color: "#fff",
                        cursor: "pointer",
                        padding: "20px",
                        display:"inline-block"
                    }}>
                        {item.title}
                    </Link>
                )
            }),
            aboutClass = (this.state.width <= 601)
                ? " center-align"
                : " right-align",
            logoClass = (this.state.width <= 601)
                ? " p15 center-align"
                : "",
            arrowUp = `<svg width="11px" height="17px" viewBox="0 0 11 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="DN---Tablet" transform="translate(-437.000000, -9315.000000)" fill="#434350">
                            <g id="Back-to-top" transform="translate(-3.000000, 9284.000000)">
                                <g id="Group-6" transform="translate(327.000000, 31.000000)">
                                    <g id="Group-15" transform="translate(113.000000, 0.000000)">
                                        <polygon id="Triangle" points="5.30543417 0.675587177 10.6108683 9.65401423 0 9.65401423"></polygon>
                                        <rect id="Rectangle-9" x="3.26488256" y="8.83779359" width="4.08110321" height="8.16220641"></rect>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`,
            backToTheTop = (this.state.width <= 601)
                ? <div className="toTheTop" onClick={this.scrollToTop}>
                        Back to top
                        <span dangerouslySetInnerHTML={{
                            __html: arrowUp
                        }}></span>
                    </div>
                : null;

        return (
            <footer className="page-footer small background-primary">
                <div className="container"/> {backToTheTop}
                <div className="footer-copyright">
                    <Row className="full-w no-margin">
                        <Col s={10} m={5} l={4} className={"offset-s1 offset-m1 offset-l2" + logoClass}>
                            <img {...jsonData.about.getAvatar()} height="31px" width="58px"/>
                        </Col>
                        <Col s={12} className="hide-on-med-and-up no-padding">
                            <div className="uppercase center-align">{navbarList}</div>
                            <hr/>
                        </Col>
                        <Col s={10} m={5} l={4} className={"offset-s1" + aboutClass}>
                            <h6>© 2017 {jsonData.about.name}. All rights reserved.</h6>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}
