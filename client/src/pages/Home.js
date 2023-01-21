import {React, useState} from 'react'
import Today from '../components/Today'
import Fivecast from '../components/Fivecast'

// snellville lat/lon for testing  33.857328,-84.0199108

// weather[0].data.timelines[0].intervals[0].values.temperature

export default function Home () {
    const [details, setDetails] = useState({ city: "", state: "" });
    const weather = [];
    const [weather2, setWeather2] = useState([])
    const fetchFunction = async (event) => {
        event.preventDefault();


        try {
            const response = await (await fetch(
                `https://api.geoapify.com/v1/geocode/search?city=${details.city}&state=${details.state}&format=json&apiKey=27a84d7b0c1b4d52b41acc3e82bbe239`
            )).json();

            const weatherRes = await (await fetch(
                `https://api.tomorrow.io/v4/timelines?location=${response.results[0].lat},${response.results[0].lon}&fields=precipitationIntensity%2CprecipitationType%2CwindSpeed%2CwindGust%2CwindDirection%2Ctemperature%2CtemperatureApparent%2CcloudCover%2CcloudBase%2CcloudCeiling%2CweatherCode&units=metric&timesteps=1d&apikey=OkVwrGemAXddKs3T0ruKtK4mPeYEemYy`
                // `https://api.tomorrow.io/v4/timelines?location=${response.results[0].lat},${response.results[0].lon}&fields=temperature&timesteps&humidity&windSpeed&precipitationIntensity&precipitation&rainIntensityvisibility&cloudCover&uvIndex&weatherCode=1h&units=metric&apikey=OkVwrGemAXddKs3T0ruKtK4mPeYEemYy`
            )).json()
            weather.push(weatherRes)
            setWeather2(weather[0].data.timelines[0].intervals)
        } catch (error) {
            console.log('Error', error);
        }
        console.log('from function', weather, weather2)
        localStorage.setItem('weather', weather && weather2)
        return weather
    };
    console.log('2nd weather', weather)

    return (
        <div>
            <h4>Home</h4>
            <form id="form" onSubmit={fetchFunction}>
                <p>
                    <label htmlFor="city">City: </label>
                    <input
                        placeholder="City"
                        type="text"
                        name="city"
                        onChange={(e) =>
                            setDetails((previousValue) => ({
                                ...previousValue,
                                city: e.target.value
                            }))
                        }
                        value={details.city}
                    />
                </p>
                <p>
                    <label htmlFor="state">State: </label>
                    <input
                        placeholder="State"
                        type="text"
                        name="state"
                        onChange={(e) =>
                            setDetails((previousValue) => ({
                                ...previousValue,
                                state: e.target.value
                            }))
                        }
                        value={details.state}
                    />
                </p>
                <p>
                    <input type="submit" value="Submit" />
                </p>
            </form>
            <div>
                <Today weather={weather} weather2={weather2}/>
                <Fivecast weather={weather}/>
            </div>
        </div>
     );
}

