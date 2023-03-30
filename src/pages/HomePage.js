import React, { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo';
import axios from 'axios';
import Card from '../components/Card';

const HomePage = () => {
    let [countries, setCountries] = useState([]);
    let [searchInput, setSearchInput] = useState('');
    let [rangeInput, setRangeInput] = useState(12);
    const rangeValue = useRef();
    const fetchData = () => {
        axios
            .get('https://restcountries.com/v3.1/all').then(
                (data) => {
                    setCountries(data.data)
                }
            )
    }
    useEffect(fetchData, [])
    return (
        <div className='homePage'>
            <header>
                <Logo></Logo>
                <h1>HomePage</h1>
                <input type="text" id='searchInput' placeholder='Tapez votre nom de pays' onChange={e => setSearchInput(e.target.value)} value={searchInput} />
                <input type="range" id='rangeInput' onChange={(e) => setRangeInput(e.target.value)} defaultValue={12} min="0" max={50} ref={rangeValue} />
            </header>
            <section className='flag-container'>
                {countries
                    .slice(0, rangeInput)
                    .filter((country) => country.translations.fra.common
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()))
                    .map(
                        (country, index) => <Card key={index} c={country}></Card>
                    )}
            </section>
        </div>

    );
};

export default HomePage;