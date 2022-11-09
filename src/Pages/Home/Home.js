import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import Card from './card/Card';

import Slider from './Slider/Slider';

const Home = () => {
    UseTitle('home')
    return (

        <div>
            <Slider></Slider>
            <Card></Card>
        </div>

    );
};

export default Home;