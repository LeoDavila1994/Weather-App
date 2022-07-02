import React, { useEffect, useState } from 'react';

const Card = ( { city, weather, celsius, fahrenheit, icon, counrty, description } ) => {

    const [ num, setNum ] = useState(true)
    const [ temp, setTemp ] = useState(true);

    const format = () =>{
        setTemp(!temp)
        setNum(!num)
    }

    const [ date, setDate ] = useState(new Date());
    const [ ampm, setAmpm] = useState ("AM")

    function refreshClock(){
        setDate(new Date());
        if(date.getHours() >= 13){
            setAmpm("PM")
        }
    }

    function refreshAmpm(){
        if(date.getHours() >= 13){
            setAmpm("PM")
        }
    }

    useEffect(()=>{
        const timerId = setInterval(refreshClock, 1000);
        const ampmId = setInterval(refreshAmpm, 10);
        return function cleanUp(){
            clearInterval(timerId, ampmId);
        }
    },[]);

    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const day = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    const hours = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    const minuts = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",
                    "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
    const seconds = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",
                    "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];

    let txtYear = date.getFullYear().toString().slice(length-2);
    let txtDay = week[date.getDay()];
    let txtMonth = month[date.getMonth()];
    let txtNumDay = day[date.getDate()];
    let txtHours = hours[date.getHours()];
    let txtMinuts = minuts[date.getMinutes()];
    let txtSeconds = seconds[date.getSeconds()];

    return (
        <div className='container'>
            <p className='mint-color margin-txt'>Weather App</p>
            <p className='white-color'>{txtDay}</p>
            <p className='white-color'>{txtNumDay}{" "}/{" "}{txtMonth}{" "}/{" "}{txtYear}</p>
            <div className='clock-container'>
                <div>
                    <h1 className='mint-color margin-txt'>{txtHours}:{txtMinuts}</h1>
                </div>
                <div className='format'>
                <div><p className='margin-inf white-color'>{ampm}</p></div><div><p className='margin-inf white-color'>{txtSeconds}</p></div>
                </div>
            </div>
            <h3 className='white-color margin-txt'>{counrty}</h3>
            <p className='white-color margin-txt'>{city}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            <p className='white-color margin-txt'>{weather}</p>
            <p className='mint-color margin-txt'>{description}</p>
            <p className='mint-color '>{num? celsius : fahrenheit}{" "}{temp? "°C" : "°F"}</p>
            <button onClick={format}className='white-color'>°C / °F</button>
        </div>
    );
};

export default Card;