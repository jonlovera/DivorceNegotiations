import React, {Component, PropTypes} from 'react';
import {Link} from 'react-scroll';
import {Navbar, Col} from 'react-materialize';
import jsonData from 'json';

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleSetActive = this.handleSetActive.bind(this);
        this.state = {
            navList: jsonData.navbar
        };
    }

    handleSetActive(to) {
        jsonData.navbar.map((item, index) => {
            jsonData.navbar[index].active = false;
            if (item.id === to) {
                jsonData.navbar[index].active = true;
            }
        });

        this.setState({navList: jsonData.navbar});
    }

    render() {
        let brand = (
                <span>
                    <span dangerouslySetInnerHTML={{
                        __html: jsonData.about.getAvatar
                    }}/>
                    <span className="hide-on-med-and-down" dangerouslySetInnerHTML={{
                        __html: jsonData.about.nameHTML
                    }}></span>
                </span>
            ),
            navbarList = this.state.navList.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={(item.active)
                            ? "active"
                            : null} to={item.id} spy={true} offset={10} smooth={true} onSetActive={this.handleSetActive}>
                            {item.title}
                        </Link>
                    </li>
                )
            }),
            toggleIcon = `<svg width="14px" height="12px" viewBox="0 0 14 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="DN---Mobile" transform="translate(-280.000000, -35.000000)" fill="#FFFFFF">
                        <g id="Nav-bar">
                            <g id="Group-11" transform="translate(280.000000, 35.000000)">
                                <g id="Group-12">
                                    <rect id="Rectangle-5" x="0" y="0" width="14" height="3"></rect>
                                    <rect id="Rectangle-5" x="0" y="9" width="14" height="3"></rect>
                                    <rect id="Rectangle-5" x="0" y="4.5" width="14" height="3"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>`;
        // return (
        //     <Navbar brand={brand} right className="uppercase">
        //         <li>
        //             <Scrollchor to="#whyus">Why us</Scrollchor>
        //         </li>
        //         <li>
        //             <Scrollchor to="#testimonials">Testimonials</Scrollchor>
        //         </li>
        //         <li>
        //             <Scrollchor to="#faq">FAQ</Scrollchor>
        //         </li>
        //         <li>
        //             <Scrollchor to="#contact">Contact</Scrollchor>
        //         </li>
        //     </Navbar>
        // )
        return (
            <nav className="uppercase row">
                <div className="nav-wrapper">
                    <Col s={10} l={10} className="offset-s1 offset-l1 no-padding">
                        <a href="/" className="brand-logo">
                            {brand}
                        </a>
                        <ul className="uppercase right hide-on-small-only">
                            {navbarList}
                        </ul>
                        <ul id="nav-mobile" className="side-nav">
                            {navbarList}
                        </ul>
                        <a className="button-collapse" href="#" data-activates="nav-mobile" dangerouslySetInnerHTML={{
                            __html: toggleIcon
                        }}></a>
                    </Col>
                </div>
            </nav>
        )
    }
}
