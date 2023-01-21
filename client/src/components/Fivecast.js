import react from 'react'

export default function Fivecast (props) {
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

    const weather2 = props.weather2

    return(
        <div id='fivecast'>
            <h1>FiveCast</h1>
        {/* {generateDays(weather2)} */}
        {console.log('weather2', weather2)}
        </div>
    )
}