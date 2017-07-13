import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Button} from 'react-materialize';

import jsonData from 'json';

import HomeCarousel from './components/Carousel';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function Home() {
    return (
        <div>
            <div id="home">
                <HomeCarousel info={jsonData.carousel} />
            </div>
            <div id="about">
                <About info={jsonData.about} />
            </div>
            <div id="whyus">
                <WhyUs info={jsonData.whyUs} />
            </div>
            <div id="testimonials" className="background-primary">
                <Testimonials info={jsonData.testimonials} />
            </div>
            <div id="faq">
                <FAQ info={jsonData.FAQ} />
            </div>
            <div id="contact" className="background-primary">
                <Contact info={jsonData.contact} />
            </div>
        </div>
    );
}
