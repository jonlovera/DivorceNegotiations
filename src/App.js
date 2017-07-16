import React, {Component, PropTypes} from 'react';
import Interactive from 'react-interactive';
import {Switch, Route} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import Home from 'scenes/Home';
import PageNotFound from 'scenes/Error/404';

import 'materialize-css';
import 'materialize-css/sass/materialize.scss';

import 'styles/style.scss'

export default class App extends Component {
    componentDidMount() {
        $('nav').each(function() {
            var $this = $(this);
            var $target = $('#main');
            $this.pushpin({
                top: $target.offset().top,
                // bottom: $target.offset().top + $target.outerHeight() - $this.height()
            });
        });

        let navColor = ()=>{
            var wn = $(window).scrollTop();
            if (wn > 10) {
                $("nav").css("background", "rgba(67, 67, 80, 0.7)");
            } else {
                $("nav").css("background", "");
            }
        }

        $(window).on("scroll", function() {
            navColor();
        });
        navColor();

        // Animations
        $.fn.extend({
            animateCss: function(animationName, cb) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    if (!cb)
                        $(this).removeClass('animated ' + animationName);
                    if (typeof cb === 'function')
                        cb();
                    }
                );
            }
        });

        $(".button-collapse").sideNav({closeOnClick: true});
    }

    render() {
        return (
            <div>
                <div id="main">
                    <Navbar/>

                    <div id="content">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            // <Route exact path="/DivorceNegotiations" component={Home}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </div>

                    <Footer/>
                </div>
            </div>
        );
    }
}
