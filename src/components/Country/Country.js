import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    // destructuring korle aro shortcut hoye jabe
    const {population,name,flags} = props.country;
    return (
        <div className='country bg-success'>
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;