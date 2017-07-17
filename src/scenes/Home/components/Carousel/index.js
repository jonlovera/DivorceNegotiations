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
            items = info.items.map((item, index) => {
                return (
                    <div key={index}>
                        {/* <img src={item.image.src}/> */}
                        <div style={{
                            backgroundImage: `url(${item.image.src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: (this.props.backgroundPosition)
                                ? this.props.backgroundPosition
                                : 'top center',
                            width: '100%',
                            height: '100%',
                            position: 'absolute'
                        }}/>
                    </div>
                )
            });

        return (
            <div>
                <Carousel axis="horizontal" interval={5500} transitionTime={700} showArrows={false} infiniteLoop dynamicHeight autoPlay showStatus={false} showThumbs={false} stopOnHover={false}>
                    {items}
                </Carousel>
                {(info.description)
                    ? <p className="legend">{info.description}</p>
                    : null}
            </div>
        );
    }
}
