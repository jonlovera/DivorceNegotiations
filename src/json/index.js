let logo = require('responsive-loader?name=./img/[hash].&sizes[]=300!img/profile.png');

let info = {
    about: {
        logo: logo,
        getAvatar: () => {
            let a = logo;
            delete a.toString;
            delete a.images;
            return a;
        },
        name: "Divorce Negotiations",
        title: "Full-stack Developer",
        description: "I am a developer that loves learning and new challenges. <br /><span class='hide-on-small-only'>I am always seeking to improve myself and my craft.</span>",
        sections: [
            {
                description: "Writing clean code is a passion of mine and so a primary goal is to always write well designed code that is easy to change and also easy to test. I try to write my code in such a way that any other developer could easily understand. I always like to write reusable code. For example, this website is rendered from one JSON file. <div class='center-align'><a href='https://github.com/jonlov/jonlov.github.io/blob/master/src/json/index.js' target='_BLANK'>(Checkout JSON file)</a></div><br /><br /> It's not just important that the code works, the perfomance and the way it's aproaching the problem also make the difference.<div class='center-align'><a href='https://github.com/jonlov/jonlov.github.io' target='_BLANK'>(Have a look of this website code)</a></div>",
                image: "code.png"
            }, {
                description: "Design is not my core, but is my desire to share my ideas with the designers. So I deliver the software with a basic design. <br/><br/>When it comes to responsive web design, it's not an extra feature for me. I always create the websites in such a way that it can be viewed on any device.",
                image: "design.png"
            }, {
                style: {
                    backgroundColor: "#130500",
                    color: "#fff"
                },
                description: "I am a very creative person. So I always love to come up with new things and new ideas. I want to make things that make a difference.",
                descriptionClass: "center-align",
                image: "ideas.png"
            }
        ],
        phone: "+6139877653",
        phoneBeautified: "03 987 7653"
    },
    carousel: [
        {
            description: "\"Sometimes when things are falling apart the may actually fall into place\"",
            image: "carousel1.png"
        }
    ]
}

// Let webpack compile all carousel images
// and then substitute each avatar on each carousel
// with the hash of the new compiled image
info.carousel.map((carousel, index) => {
    if (carousel.image) {
        let carouselAvatar = require(`responsive-loader?placeholder=true&name=./img/carousel/[hash].&sizes[]=400&sizes[]=600&sizes[]=800!img/carousel/${carousel.image}`);
        carousel.image = carouselAvatar;
        info.carousels[index] = carousel;
    }
});

export default info;
