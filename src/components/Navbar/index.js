import React, {Component, PropTypes} from 'react';
import Scrollchor from 'react-scrollchor';
import {Navbar} from 'react-materialize';
import jsonData from 'json';

export default class Nav extends Component {
    render() {
        return (
            <Navbar brand={jsonData.about.name} right className="row white p100">
                <li>
                    <Scrollchor to="#about" animate={{
                        offset: -3000,
                        duration: 1300
                    }}>Home</Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#whyus" animate={{
                        offset: -124
                    }}>Why us</Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#testimonials" animate={{
                        offset: -124
                    }}>Testimonials</Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#faq">FAQ</Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#contact">Contact</Scrollchor>
                </li>
            </Navbar>
        )
    }
}
