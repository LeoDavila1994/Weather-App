import React, { useState } from 'react';

const Card = () => {

    let cel = 21.3;
    let far = (cel * 9/5 ) + 32;

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
            <p className='white-color'>Aguascalientes City</p>
            <i className="fa-solid fa-cloud-rain mint-color"></i>
            <p className='white-color'>Nublado</p>
            <p className='mint-color'>{num? cel : far}{" "}°{temp? "C" : "F"}</p>
            <button onClick={format}className='white-color'>°F / °C</button>
        </div>
    );
};

export default Card;