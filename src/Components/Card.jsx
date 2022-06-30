import React, { useState } from 'react';

const Card = ( { city, weather, celsius, fahrenheit, icon, counrty, description } ) => {

    const [ num, setNum ] = useState(true)
    const [ temp, setTemp ] = useState(true);

    const format = () =>{
        setTemp(!temp)
        setNum(!num)
    }

    return (
        <div className='container'>
            <h1 className='mint-color'>Weather App</h1>
            <h3 className='white-color'>{counrty}</h3>
            <p className='white-color'>{city}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            <p className='white-color'>{weather}</p>
            <p className='mint-color'>{description}</p>
            <p className='mint-color'>{num? celsius : fahrenheit}{" "}°{temp? "C" : "F"}</p>
            <button onClick={format}className='white-color'>°C / °F</button>
        </div>
    );
};

export default Card;