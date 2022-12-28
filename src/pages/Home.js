import React from 'react'
import useState from 'react'

export default function () {
    // GeoApify gets Lat/Long
    fetch(`https://api.geoapify.com/v1/geocode/search?city=${city}&state=${state}&format=json&apiKey=27a84d7b0c1b4d52b41acc3e82bbe239`)
    // OpenWeatherApi One Call API 3.0 gets the weather of the Lat/Long
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=544ce8f74a895e6f7bd6425293b01b47`)

    const [lat, setLat] = useState('')
    const [lon, setLong] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')


    return(
        <div>
            <h4>Home</h4>
            <form action='/' method='post'>
                <p><label for='city'>City: </label>
                <input placeholder='City' type='text' name='city'/></p>
                <p><label for='state'>State: </label>
                <input placeholder='State' type='text' name='state' /> </p>
                <p><input type='submit' value='Submit'/></p>
            </form>
        </div>
    )
}