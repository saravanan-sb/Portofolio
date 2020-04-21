import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage({ profilePic, name }) {

    return (
        <div>
            <Hero profilePic={profilePic} name={name} />
            <Carousel />
        </div>
    );

}

export default HomePage;