import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <div>
            <h2>World Tour over {countries.length} countries</h2>
            </div>
            <div className='countryResponsive'>
            {
                // ekhane country key pathano hoyeche jeno barbar ek kaj na kora jage country={country}
                countries.map(country => <Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
