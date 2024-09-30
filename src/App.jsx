import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import Weather from './Weather/Weather';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (!city) return;

            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e93a9abb570ba80b0d2eae7d5aeeef13`
                );
                setWeatherData(response.data);
            } catch (error) {
                setWeatherData(null);
                setError("Failed to fetch weather data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [city]);

    return (
        <>
            <Navbar />
            <div className="container">
                <Search onSearch={ setCity } />
                <Weather weatherData={ weatherData } loading={ loading } error={ error } />
            </div>
        </>
    );
};

export default App;