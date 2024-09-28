import React from "react";
import styles from "./Weather.module.css"

const Weather = ({ weatherData, loading, error }) => {
    if (loading) {
        return <p>Loading...</p>;
    };

    if (error) {
        return <p>Error fetching weather data: { error }</p>;
    };

    if (!weatherData) {
        return <p>No weather data available.</p>;
    };

    const { name, main, weather } = weatherData;
    const { temp, humidity } = main;

    function convertKelvinToCelsius(kelvin) {
        return Math.round(kelvin - 273.15);
    };

    return (
        <div className={ styles.weatherCard }>
            <h2 className={ styles.weatherTitle }>Temperature of <span>{ name }</span></h2>
            <p>Temperature: { convertKelvinToCelsius(temp) }°C</p>
            <p>Humidity: { humidity }%</p>
            <p>Weather: { weather[0].description }</p>
        </div>
    );
};

export default Weather;
