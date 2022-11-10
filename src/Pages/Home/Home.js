import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import Card from './card/Card';

import Hommid from './Hommid';

import Slider from './Slider/Slider';

const Home = () => {
    UseTitle('home')
    return (

        <div>
            <Slider></Slider>
            <Hommid></Hommid>
            <Card></Card>
        </div>

    );
};

export default Home;