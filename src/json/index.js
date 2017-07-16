let logo = require('responsive-loader?name=./img/[hash].&sizes[]=300!img/logo.png');
let whyUsImage = require('responsive-loader?name=./img/[hash].&sizes[]=700!img/whyUs.jpg');
let beachImage = require('responsive-loader?name=./img/[hash].&sizes[]=1300!img/beach.jpg');

let info = {
    navbar: [{
        title: "Why Us",
        id: "whyus"
    }, {
        title: "Testimonials",
        id: "testimonials"
    }, {
        title: "FAQ",
        id: "faq"
    }, {
        title: "Contact",
        id: "contact"
    }],
    about: {
        logo: logo,
        getAvatar: () => {
            let a = logo;
            delete a.toString;
            delete a.images;
            return a;
        },
        name: "Divorce Negotiations",
        nameHTML: "Divorce <br />Negotiations",
        description: `Divorce Negotiations aims to provide couples who have decided to split with an affordable, valuable and sensible methodology to settle property and financial matters without undertaking expensive and lengthy legal engagements.  Discussions can also extend to custody matters.
        <br /><br />The legal profession has created an entire industry out of divorce.  When considering divorces which fall into the ‘Simple profile’, the legal profession knows all the answers (i.e.: what the split should be??) but no one will tell you until the very end and of course by this time you have spent over $150K each.
        <br /><br />It seems to be a process where everyone (lawyers & mediators etc.) take your money along the journey while ‘trying to help you settle’ however when you ask a direct question about the percentage split the common answer is:-“….only the judge can tell you.”  Of course by the time you get to the judge you have spent 4+ years in the system and spent over $150k each with the lawyers and mediators all taking their piece.
        <br /><br />Divorce Negotiations concentrates on cases that fall into the ‘Simple profile’ and by doing this we believe we can help free up the lawyers to focus on the cases that need their skills; namely cases which fall into the Complicated and/or Volatile profiles.
        <br /><br />Having spoken to many people who have divorced using lawyers and attended court they were very disappointment with their decision to engaged lawyers and/or proceed to court.  None of them believed it was value for money and all of them were highly critical of the process.
        <br /><br />We have more than 20 years’ negotiating experience and truly understand the emotional drain divorce can place on individuals.  We will take time to outline the alternative path and we believe once people understand what the lawyer/court process involves they will be very eager to reach an agreement.
        <br /><br />It is very important to understand that we are not lawyers and do not offer any legal advice but that is our competitive advantage because we are focused on getting an immediate result rather than dragging the process out for years. <br />Think of Divorce Negotiations as the Uber of the divorce industry.  For 40 years the legal profession has controlled all the answers and the process.  Divorce Negotiations is empowering people to arrive at a successful outcome without the expense and the pain that has been felt by people who proceed to court.
        <br /><br />Put simply, we help people understand the opportunity cost of delay. We believe a high percentages of <b>divorces fall into the following profiles:</b> `,
        profiles: [{
            title: "Simple",
            description: "Mum, dad, kids, cars, property and superannuation (non-complicated asset portfolio)",
            icon: `<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="DN---Desktop-" transform="translate(-250.000000, -2614.000000)">
                            <g id="Divorce-Profiles" transform="translate(-11.000000, 2481.000000)">
                                <g id="Group-4" stroke-width="2" stroke="#FCC60A">
                                    <g id="1" transform="translate(262.000000, 114.000000)">
                                        <g id="Number" transform="translate(0.000000, 20.000000)">
                                            <circle id="Oval" cx="20" cy="20" r="20"></circle>
                                        </g>
                                    </g>
                                </g>
                                <g id="Group-4" transform="translate(277.000000, 153.500000) rotate(37.000000) translate(-277.000000, -153.500000) translate(270.000000, 139.000000)" fill="#FCC60A">
                                    <polygon id="Rectangle-12" points="1.70530257e-13 23 13.5761677 23.5587184 13.5761677 28.5587184 1.70530257e-13 28"></polygon>
                                    <polygon id="Rectangle-12" transform="translate(11.047196, 14.110675) rotate(-90.000000) translate(-11.047196, -14.110675) " points="-2.45222776 11.4401675 24.5466193 11.7811819 24.5466193 16.7811819 -2.45222776 16.4401675"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`
        }, {
            title: "Volitile",
            description: "Where there is domestic violence or child abuse",
            icon: `<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="DN---Desktop-" transform="translate(-590.000000, -2614.000000)">
                            <g id="Divorce-Profiles" transform="translate(-11.000000, 2481.000000)">
                                <g id="Group-4">
                                    <g id="2" transform="translate(602.000000, 134.000000)">
                                        <g id="noun_2318_cc">
                                            <g id="icon">
                                                <path d="M16.1297388,3 C16.1297388,3 21.3573513,6.69273241 16.1297388,14.2793948 C11.4056488,21.1352626 8.58571204,28.41361 13.8009919,33.8491148 C15.3119114,35.4241638 17.1036618,36.2257827 18.9341718,36.415 C15.9743481,35.5513657 13.7692795,32.5989416 16.339393,27.3181228 C17.9200798,24.0700687 21.8566453,20.2452013 20.5458663,15.7399268 C20.5458663,15.7399268 24.0895504,20.2039752 21.676237,27.0073414 C20.5800452,30.0975382 25.4109003,30.4350991 24.1022354,27.0616048 C23.3108349,25.0232024 27.8379557,31.1126873 25.3999771,34.6310015 C27.7005353,33.0411534 28.9457754,30.4245283 29.8590924,27.6303138 C32.4499952,19.7078524 29.0405602,6.92881359 16.1297388,3 Z" id="Shape" fill="#6A89A7" fill-rule="nonzero"></path>
                                                <path d="M6.5,33.5 L34.0045451,5.99545492" id="Line" stroke="#D0011B" stroke-width="2" stroke-linecap="square"></path>
                                                <g id="Number" stroke-width="2" stroke="#D0011B">
                                                    <circle id="Oval" cx="20" cy="20" r="20"></circle>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`
        }, {
            title: "Complicated",
            description: "Families who have operating companies and/or a complicated asset portfolio.",
            icon: `<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="DN---Desktop-" transform="translate(-928.000000, -2614.000000)">
                            <g id="Divorce-Profiles" transform="translate(-11.000000, 2481.000000)">
                                <g id="Group-4">
                                    <g id="3" transform="translate(940.000000, 134.000000)">
                                        <g id="Group-11">
                                            <path d="M19.5136685,19.1184065 C19.4144826,19.1184065 19.2694584,19.1138238 19.160675,19.2231696 C19.0391285,19.3452652 18.9949271,19.5024243 18.996442,19.5911487 C19.0041337,20.094038 18.965333,20.6799305 18.965333,21.2816293 L18.965333,21.7549905 C18.965333,21.8966633 19.174481,22.0976644 19.3175993,22.0976644 L19.6463274,22.0976644 C20.2093317,22.0976644 20.7724627,22.0562269 21.3353997,22.0581186 C22.2118695,22.0607826 23.0843258,22.0419854 23.9657928,22.0381423 C23.9605939,22.480477 23.9611866,22.8934706 23.9617793,23.3220101 C23.9619743,23.5226188 23.9621693,23.6962967 23.9617793,23.8961264 L16.9448391,23.8961264 L16.9448391,21.8831343 C16.9448391,21.7416552 16.8680138,21.7646156 16.7248955,21.7646156 L12.0283047,21.7646156 L12.0283047,12.3726501 L16.7248955,12.3726501 C16.8680138,12.3726501 16.9448391,12.1519721 16.9448391,12.0104266 L16.9448391,9.57445685 C16.9448391,9.43271811 16.8680138,9.24199465 16.7248955,9.24199465 L9.33522853,9.24199465 C9.19211023,9.24199465 9.06491349,9.43271811 9.06491349,9.57445685 L9.06491349,31.5635276 C9.06491349,31.7052004 9.19211023,31.8892883 9.33522853,31.8892883 L19.3175993,31.8892883 C19.4608531,31.8892883 19.5041314,31.7052004 19.5041314,31.5635276 L19.5041314,29.2557357 C19.5041314,29.1141901 19.4608531,28.9584619 19.3175993,28.9584619 L12.0283047,28.9584619 L12.0283047,24.4956134 L13.9814484,24.4956134 L13.9814484,26.6913281 C13.9814484,26.8328737 14.1183841,26.8269518 14.2616978,26.8269518 L26.7720569,26.8269518 C26.9153701,26.8269518 27.0473086,26.8328737 27.0473086,26.6913281 L27.0473086,19.3580142 C27.0473086,19.2191664 26.9278036,19.099349 26.7871829,19.0955454 L19.5136685,19.1184065 Z" id="Shape" fill="#6A89A7" fill-rule="nonzero"></path>
                                            <path d="M28.6001667,12.3726501 L28.7984039,12.3726501 L28.7984039,28.9584616 L21.8457835,28.9584616 C21.7024693,28.9584616 21.7266753,29.1141899 21.7266753,29.2557354 L21.7266753,31.5635274 C21.7266753,31.7052002 21.7024693,31.8892881 21.8457835,31.8892881 L31.5687559,31.8892881 C31.7120711,31.8892881 31.9638441,31.7052002 31.9638441,31.5635274 L31.9638441,9.57445685 C31.9638441,9.43271811 31.7120711,9.24199465 31.5687559,9.24199465 L19.3175993,9.24199465 C19.174481,9.24199465 18.9653331,9.43271811 18.9653331,9.57445685 L18.9653331,9.78625573 C18.9653331,10.4285464 19.0065046,11.1191956 19.0011097,11.7870175 C18.9953239,12.5485394 19.0128149,13.3332881 19.0141349,14.0732818 C19.0064374,14.0730822 19.0105786,14.0939311 19.0026919,14.0939311 C17.9041093,14.0840461 16.8092849,14.1045016 15.7700302,14.1045016 L14.2616979,14.1045016 C14.1183841,14.1045016 13.9814484,14.1767067 13.9814484,14.3184123 L13.9814484,19.3187944 C13.9814484,19.4605 14.1183841,19.3666675 14.2616979,19.3666675 L16.7248955,19.3666675 C16.8680138,19.3666675 16.9448391,19.4605 16.9448391,19.3187944 L16.9448391,17.0353281 L26.7720569,17.0353281 C26.9153702,17.0353281 27.0473087,17.0243377 27.0473087,16.8825926 L27.0473087,14.3184123 C27.0473087,14.1767067 26.9153702,14.1045016 26.7720569,14.1045016 L26.4196483,14.1045016 C25.0635809,14.1045016 23.6852066,14.0849852 22.3520915,14.0897346 L21.9788392,14.1622323 C21.986335,13.51025 22.0315873,12.772308 22.0213912,12.3726501 L28.6001667,12.3726501 L28.6001667,12.3726501 Z" id="Shape" fill="#6A89A7" fill-rule="nonzero"></path>
                                            <g id="Group-10">
                                                <g id="noun_2318_cc" transform="translate(6.000000, 5.000000)"></g>
                                                <circle id="Oval" stroke="#D0011B" stroke-width="2" cx="20" cy="20" r="20"></circle>
                                                <path d="M6.5,33.5 L34.0045451,5.99545492" id="Line" stroke="#D0011B" stroke-width="2" stroke-linecap="square"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`
        }]
    },
    carousel: [{
        image: "carousel1.jpg",
        description: ""
    }, {
        image: "carousel2.jpg",
        description: "\"Sometimes when things are falling apart the may actually fall into place\""
    }, {
        image: "carousel3.jpg",
        description: ""
    }],
    whyUs: {
        getImage: () => {
            let a = whyUsImage;
            delete a.toString;
            delete a.images;
            return a;
        },
        description: "The traditional method for trying to settle a divorce is to engage lawyers and go through mediation.  Lawyers by nature are not negotiators but most of us think they are.  Lawyers send letters to each other outlining a position and their instructions.  It’s not until you get into the process that you truly understand how expensive this is.  The person who is sending the letter needs to discuss the contents with their lawyer and this time is chargeable and then you are charged by the page to have the letter typed and sent.  At the receiving end the other person is charged per page to have the letter read and then the same process is followed to have the reply drafted and sent back.  This process is followed back and forth for months and in a lot of cases years.  Then comes mediation. <br/><br/>At some point the lawyers will suggest you attend mediation (I hear you say you thought this was what you paid the lawyer for).  In order to attend mediation the mediator needs an outline of the situation:- assets, liabilities and desired outcomes etc.  This is prepared by the lawyers and at this point you need to start thinking of the time you spend agreeing on the contents and the costs of typing this up in the mediators desired format (no kidding this will be the same information you have already supplied in some form but it now needs to be typed up in a different format – think more money). <br/><br/>Mediators will sit both parties down and talk through what each party wants (having received letters outlining this previously you sit there wondering why you are there because you already know what the other party wants).  The most frustrating part of this is mediators will not make recommendations or tell you the probable outcome of court but will repeat (over and over) what the other party wants as if you are not in the room when they state it).   The mediator can cost in excess of $5,000 and by the time you have paid your individual lawyers to prepare the necessary documents the whole exercise can cost $10K.  The crazy part of this is that if you end up starting court proceedings you will be required to attend mediation numerous times. <br/><br/>The difference we offer is that we are negotiators.  We will identify the gaps and try to close them by making both parties understand the cost of not agreeing.  Often people may only be 5%-10% apart but once you understand the cost of not agreeing this percentage becomes insignificant.   In other words, we help people understand the opportunity costs of delay.",
    },
    testimonials: [{
        name: "Melissa from Castle Hill",
        description: "I used a lawyer for 4 years. It was a complete waste of time and money. I wish I had of known about Divorce Negotiations.",
    }, {
        name: "Brendan from Pymble",
        description: "I had no idea how little power my lawyer had.  No one can make the other person do anything except the Judge at the end.  A complete waste of time.",
    }],
    FAQ: [{
        question: "What is the difference between mediators and Divorce Negotiations?",
        answer: "Mediators spend their time repeating nearly verbatim what each party has said to the other party even though everyone was in the same room and heard firsthand what the other person said.  Mediators will not suggest what is or isn’t a good outcome.  Divorce Negotiations will identify the differences and try to bring the parties to a point of agreement.",
    }, {
        question: "Why should I use Divorce Negotiations and not a lawyer?",
        answer: "The most misunderstood belief in the divorce process is the power of lawyers.  They are not negotiators, they communicate to each other via expensive letters back and forth and they are powerless to get one party to agree with the other.   This does not mean there is not a place for lawyers in the divorce process but if you have a relatively straightforward asset pool then spending money on lawyers is not necessary.  Unlike lawyers we won’t accept every client.  After our initial call, if we believe we can’t help you, we will tell you.",
    }, {
        question: "When should I use a lawyer?",
        answer: "If you have complicated financial assets, issues of violence or child abuse Divorce Negotiations is not for you.  If you decide to consult a lawyer our advice is to use a Family Court Specialists (lawyers who only work on family court matters).",
    }],
    contact: {
        getImage: () => {
            let a = beachImage;
            delete a.toString;
            delete a.images;
            return a;
        },
        phone: "+6139877653",
        phoneBeautified: "03 987 7653",
        description: "Firstly, contact our office for an initial discussion which is free.  The aim of the initial call is to determine if you we can help you (i.e.: if your desire for a successful outcome outweighs your negative feelings towards your ex-partner then there is a high degree chance of a successful outcome).  If we don’t believe we can help you we have no interest in wasting your time or money and we will explain why. <br/><br/>One of the most common reason why we may not be able to help you is if one of the parties has no interest in settling or they want their day in court.  Don’t despair because in some of these cases it may be an option to come back to us later once some of the emotions have settled down (or when the bank balance has received a significant battering). <br/><br/>If we believe we can help you the next step is to complete a quick form outlining the assets, liabilities and your desired outcome.  One of our team will then have a call with both parties individually and then we can make a decision whether to proceed with a formal negotiation session.  If we decide to proceed an appointment is set and at this point payment will be due. "
    }
}

// Let webpack compile all carousel images
// and then substitute each avatar on each carousel
// with the hash of the new compiled image
info.carousel.map((item, index) => {
    if (item.image) {
        let carouselAvatar = require(`responsive-loader?placeholder=true&name=./img/carousel/[hash].&sizes[]=1200&!img/carousel/${item.image}`);
        item.image = carouselAvatar;
        info.carousel[index] = item;
    }
});

export default info;
