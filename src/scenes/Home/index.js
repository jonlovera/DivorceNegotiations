import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Button} from 'react-materialize';

import jsonData from 'json';

import Home from './components/Home';

export default function Home() {
    return (
        <div>
            <div id="home">
                <Home info={jsonData.home} />
            </div>
        </div>
    );
}
