import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../../context/themeContext";
import styles from "./Weather.module.css";

const Weather = React.memo(() => {
    const { data, loading, error } = useSelector((state) => state.weather);
    const { isDarkMode } = useTheme();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching weather data: { error }</p>;
    if (!data) return <p>No weather data available.</p>;

    const { name, main, weather } = data;
    const { temp, humidity } = main;

    function convertKelvinToCelsius(kelvin) {
        return Math.round(kelvin - 273.15);
    };

    return (
        <div className={ isDarkMode ? styles.weatherCardDark: styles.weatherCardLight }>
            <h2 className={ styles.weatherTitle }>Temperature of <span>{ name }</span></h2>
            <p>Temperature: { convertKelvinToCelsius(temp) }°C</p>
            <p>Humidity: { humidity }%</p>
            <p>Weather: { weather[0].description }</p>
        </div>
    );
});

export default Weather;