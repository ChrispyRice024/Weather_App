import react from 'react'

export default function Fivecast (props) {
    console.log('weather fivecast', props)
    // const weather = props.weather.data.timelines[0].intervals[0].values.temperature
    // const weather = [
    //     one,
    //     two,
    //     three,
    //     four,
    //     five,
    //     six,
    //     seven,
    // ]


    const generateDays = (weather) => {
        return weather.map(weather => <div>{weather.data}</div>)
    }

    return(
        <div id='fivecast'>
            <h1>FiveCast</h1>
        {/* {generateDays(weather)} */}
        </div>
    )
}