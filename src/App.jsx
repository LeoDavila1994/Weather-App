import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'

// Pendientes:
//1- Cambiar bg segun estado de clima.
//2- Darle funciuonalidad al reloj.
//3- Usar un custom Hook.

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

    let celsius = (kelvin - 273.15).toFixed(1);

    let fahrenheit = ((kelvin - 273.15) * 9/5 +32).toFixed(1);

    let icon = (weatherApi.weather?.[0].icon);

    let counrty = (weatherApi.sys?.country);

    let description = (weatherApi.weather?.[0].description);

    let bgi = "./src/assets/raining_nigth.gif";

    return (
        <section style={{backgroundImage:`url(${bgi})`}}>
            <Card city={weatherApi.name} weather={weatherApi.weather?.[0].main} celsius={celsius} fahrenheit={fahrenheit} icon={icon} counrty={counrty} description={description}/>
        </section>
    )
}

export default App
