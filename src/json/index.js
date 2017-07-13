let logo = require('responsive-loader?name=./img/[hash].&sizes[]=300!img/logo.png');
let whyUsImage = require('responsive-loader?name=./img/[hash].&sizes[]=700!img/whyUs.jpg');
let beachImage = require('responsive-loader?name=./img/[hash].&sizes[]=1300!img/beach.jpg');

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
        nameHTML: "Divorce <br />Negotiations",
        description: "Divorce Negotiations aims to provide couples who have decided to split with an affordable, valuable and sensible methodology to settle property and financial matters without undertaking expensive and lengthy legal engagements.  Discussions can also extend to custody matters.  <br /><br />The legal profession has created an entire industry out of divorce.  When considering divorces which fall into the ‘Simple profile’, the legal profession knows all the answers (i.e.: what the split should be??) but no one will tell you until the very end and of course by this time you have spent over $150K each. <br /><br />It seems to be a process where everyone (lawyers & mediators etc.) take your money along the journey while ‘trying to help you settle’ however when you ask a direct question about the percentage split the common answer is:-“….only the judge can tell you.”  Of course by the time you get to the judge you have spent 4+ years in the system and spent over $150k each with the lawyers and mediators all taking their piece. <br /><br />Divorce Negotiations concentrates on cases that fall into the ‘Simple profile’ and by doing this we believe we can help free up the lawyers to focus on the cases that need their skills; namely cases which fall into the Complicated and/or Volatile profiles.<br /><br />Having spoken to many people who have divorced using lawyers and attended court they were very disappointment with their decision to engaged lawyers and/or proceed to court.  None of them believed it was value for money and all of them were highly critical of the process.<br /><br />We have more than 20 years’ negotiating experience and truly understand the emotional drain divorce can place on individuals.  We will take time to outline the alternative path and we believe once people understand what the lawyer/court process involves they will be very eager to reach an agreement.<br /><br />It is very important to understand that we are not lawyers and do not offer any legal advice but that is our competitive advantage because we are focused on getting an immediate result rather than dragging the process out for years. <br />Think of Divorce Negotiations as the Uber of the divorce industry.  For 40 years the legal profession has controlled all the answers and the process.  Divorce Negotiations is empowering people to arrive at a successful outcome without the expense and the pain that has been felt by people who proceed to court.<br /><br />Put simply, we help people understand the opportunity cost of delay. We believe a high percentages of <b>divorces fall into the following profiles:</b> ",
        sections: [{
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
        }]
    },
    carousel: [{
        image: "carousel1.jpg",
        description: "\"Sometimes when things are falling apart the may actually fall into place\""
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
        let carouselAvatar = require(`responsive-loader?placeholder=true&name=./img/carousel/[hash].&sizes[]=400&sizes[]=600&sizes[]=800!img/carousel/${item.image}`);
        item.image = carouselAvatar;
        info.carousel[index] = item;
    }
});

export default info;
