import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  // const [ weather, setWeather ] = useState({});

  // useEffect( () => {

  // function success(pos) {

  //   const crd = pos.coords;

  //   let lat = crd.latitude;

  //   let long = crd.longitude;

  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={9a59acf62c14b4f7188805d27405699e}`)
  //   .then(res => setWeather(res.data))

  // }

  // navigator.geolocation.getCurrentPosition(success);

  // },[]);

  // console.log(weather);

  return (
    <section>
      <Card />
    </section>
  )
}

export default App
