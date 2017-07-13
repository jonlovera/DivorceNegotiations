import React, {Component, PropTypes} from 'react';
import Scrollchor from 'react-scrollchor';
import {Navbar} from 'react-materialize';
import jsonData from 'json';

export default class Nav extends Component {
    render() {
        let brand = (<span><img {...jsonData.about.getAvatar()}/><span dangerouslySetInnerHTML={{
            __html: jsonData.about.nameHTML
        }}></span></span>);
        return (
            <Navbar brand={brand} right className="row uppercase p100">
                <li>
                    <Scrollchor to="#whyus">Why us</Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#testimonials">Testimonials</Scrollchor>
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
