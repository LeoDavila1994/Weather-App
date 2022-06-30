import React, { useState } from 'react';

const Card = ( { city, weather, celsius, fahrenheit } ) => {

    const [ num, setNum ] = useState(true)
    const [ temp, setTemp ] = useState(true);

    const format = () =>{
        setTemp(!temp)
        setNum(!num)
    }

    return (
        <div className='container'>
            <h1 className='mint-color'>Weather App</h1>
            <h3 className='white-color'>México</h3>
            <p className='white-color'>{city} City</p>
            <i className="fa-solid fa-cloud-rain mint-color"></i>
            <p className='white-color'>{weather}</p>
            <p className='mint-color'>{num? celsius : fahrenheit}{" "}°{temp? "C" : "F"}</p>
            <button onClick={format}className='white-color'>°C / °F</button>
        </div>
    );
};

export default Card;