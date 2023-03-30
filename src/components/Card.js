import React from 'react';

const Card = ({ c }) => {
    return (
        <div className='card' >
            <div className="img-container">
                <img src={c.flags.svg} alt="drapeau réunion" />
            </div>
            <div className="info-container">
                <span>Pays : {c.translations.fra.common}</span>
                <span>Capital : {c.capital}</span>
                <span>Population : {c.population}</span>
            </div>
        </div>
    );
};

export default Card;