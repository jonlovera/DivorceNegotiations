import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/main.min.css';

// import Skills from './components/Skills';
// import Sections from './components/Sections';

export default class HomeCarousel extends Component {
    render() {
        let info = this.props.info,
            items = info.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.image.src}/>
                        <p className="legend">{item.description}</p>
                    </div>
                )
            });

        return (
            <Carousel axis="horizontal" style={{height: "100%"}} showArrows={false} dynamicHeight autoPlay showStatus={false} showThumbs={false} stopOnHover={false}>
                {items}
            </Carousel>
        );
    }
}
