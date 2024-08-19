import React from 'react';
import banner from '../images/banner.jpg'
import '../App.css';

function Banner() {
    return (
        <section className="banner">
            <img src= {banner} alt="Rafting" />
        </section>
    );
}

export default Banner;