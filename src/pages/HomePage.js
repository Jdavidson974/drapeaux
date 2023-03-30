import React from 'react';
import Logo from '../components/Logo';

const HomePage = () => {
    return (
        <header>
            <Logo></Logo>
            <h1>HomePage</h1>
            <input type="text" id='searchInput' placeholder='Tapez votre nom de pays' />
            <input type="range" id='rangeInput' />
        </header>

    );
};

export default HomePage;