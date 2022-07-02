import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'

// Pendientes:
//2- Hacer pantalla de carga.
//3- Usar un custom Hook.

function App() {

    const [weatherApi, setWeatherApi] = useState({});
    const [randomBg, setRandomBg] = useState("./src/assets/wp_768.jpg");
    const dateBg = new Date();

    useEffect(() => {

        function succes(pos) {
            const crd = pos.coords;

            let lat = crd.latitude;

            let long = crd.longitude;

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9a59acf62c14b4f7188805d27405699e`)
                .then(res => setWeatherApi(res.data))

        }

        navigator.geolocation.getCurrentPosition(succes);

        bgRandom;

        }, []);

        const bgRandom = ()=>{
            if (weatherApi.weather?.[0].id >= 200 && weatherApi.weather?.[0].id <= 232) {
                if (dateBg.getHours() <= 18) {
                    setRandomBg("./src/assets/thunder_day.gif")
                }
                setRandomBg("./src/assets/thunder_nigth.gif")
            } else if (weatherApi.weather?.[0].id >= 300 && weatherApi.weather?.[0].id <= 531) {
                if (dateBg.getHours() <= 18) {
                    setRandomBg("./src/assets/raining_day.gif")
                }
                setRandomBg("./src/assets/raining_nigth.gif")
            } else if (weatherApi.weather?.[0].id >= 600 && weatherApi.weather?.[0].id <= 622) {
                if (dateBg.getHours() <= 18) {
                    setRandomBg("./src/assets/snow_day.gif")
                }
                setRandomBg("./src/assets/snow_nigth.gif")
            } else if (weatherApi.weather?.[0].id >= 701 && weatherApi.weather?.[0].id <= 781) {
                if (dateBg.getHours() <= 18) {
                    setRandomBg("./src/assets/mist_day.gif")
                }
                setRandomBg("./src/assets/mist_nigth.gif")
            } else if (weatherApi.weather?.[0].id === 800) {
                if (dateBg.getHours() <= 18) {
                    setRandomBg("./src/assets/clear_day.gif")
                }
                setRandomBg("./src/assets/clear_nigth.gif")
            } else if (weatherApi.weather?.[0].id >= 801 && weatherApi.weather?.[0].id <= 804) {
                if (dateBg.getHours() <= 18) {
                    setRandomBg("./src/assets/cloud_day.gif")
                }
                setRandomBg("./src/assets/cloud_nigth.gif")
            }
        }

    let kelvin = (weatherApi.main?.temp);

    let celsius = (kelvin - 273.15).toFixed(1);

    let fahrenheit = ((kelvin - 273.15) * 9 / 5 + 32).toFixed(1);

    let icon = (weatherApi.weather?.[0].icon);

    let counrty = (weatherApi.sys?.country);

    let description = (weatherApi.weather?.[0].description);

    return (
        <section style={{ backgroundImage: `url(${randomBg})` }}>
            <Card city={weatherApi.name} weather={weatherApi.weather?.[0].main} celsius={celsius} fahrenheit={fahrenheit} icon={icon} counrty={counrty} description={description} />
        </section>
    )
}

export default App
