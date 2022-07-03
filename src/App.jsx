import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

    const [weatherApi, setWeatherApi] = useState({});

    useEffect(() => {

        function succes(pos) {
            const crd = pos.coords;

            let lat = crd.latitude;

            let long = crd.longitude;

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9a59acf62c14b4f7188805d27405699e`)
                .then(res => setWeatherApi(res.data))

        }

        navigator.geolocation.getCurrentPosition(succes);

        }, []);

    let kelvin = (weatherApi.main?.temp);

    return (
        <section>
            <Card city={weatherApi.name} weather={weatherApi.weather?.[0].main} celsius={(kelvin - 273.15).toFixed(1)} fahrenheit={((kelvin - 273.15) * 9 / 5 + 32).toFixed(1)} icon={(weatherApi.weather?.[0].icon)} counrty={(weatherApi.sys?.country)} description={(weatherApi.weather?.[0].description)} />
        </section>
    )
}

export default App


