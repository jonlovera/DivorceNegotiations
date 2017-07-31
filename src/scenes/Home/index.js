import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Button} from 'react-materialize';

import jsonData from 'json';

import HomeCarousel from './components/Carousel';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import GettingStarted from './components/GettingStarted';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

export default function Home() {
    return (
        <div>
            <div id="home">
                <HomeCarousel info={jsonData.carousel}/>
            </div>
            <div id="about">
                <About info={jsonData.about}/>
            </div>
            <div id="whyus">
                <WhyUs info={jsonData.whyUs}/>
            </div>
            <div id="testimonials" className="background-primary">
                <Testimonials info={jsonData.testimonials}/>
            </div>
            <div id="gettingStarted" className="background-primary" style={{
                paddingBottom: '70px'
            }}>
                <GettingStarted/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
            <div id="faq" className="background-primary" style={{
                paddingBottom: '50px'
            }}>
                <FAQ info={jsonData.FAQ}/>
            </div>
            <Row className="no-padding" style={{
                position: "relative",
                marginBottom: 0,
                height: '84vh',
                backgroundImage: 'url(' + jsonData.beachImage() + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom'
            }}>
                <div href="/" className="brand-logo col offset-s1 offset-l1" style={{
                    top: '50%',
                    transform: "translate(0, -50%)",
                    position: 'absolute',
                    opacity: .75
                }}>
                    <span>
                        <span style={{
                            WebkitFilter: "drop-shadow(1px 1px 2px rgba(33, 33, 33, 0.44)",
                            filter: "drop-shadow(1px 1px 2px rgba(33, 33, 33, 0.44)"
                        }} dangerouslySetInnerHTML={{
                            __html: jsonData.about.getAvatarBigger
                        }}/>
                        <span style={{
                            fontSize: "30px",
                            lineHeight: "30px",
                            marginTop: "14px",
                            textShadow: "1px 1px 2px rgba(33, 33, 33, 0.44)"
                        }} dangerouslySetInnerHTML={{
                            __html: jsonData.about.nameHTML
                        }}></span>
                    </span>
                </div>
            </Row>
        </div>
    );
}
