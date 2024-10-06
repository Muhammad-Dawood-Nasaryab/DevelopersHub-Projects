import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './state/weather/weatherSlice';
import { useTheme } from './context/themeContext';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';

const Weather = React.lazy(() => import('./Components/Weather/Weather'));

const App = () => {
    const dispatch = useDispatch();
    const { isDarkMode } = useTheme();

    const style = {
        backgroundColor: isDarkMode? "#333" : "#fff",
        color: isDarkMode? "#fff" : "#333",
    };

    const handleSearch = (city) => {
        dispatch(fetchWeather(city))
    }

    return (
        <div className={isDarkMode ? "dark" : "light"}>
            <Navbar />
            <div className="container">
                <Search onSearch={ handleSearch } />
                <Suspense fallback={<div>Loading...</div>}>
                    <Weather />
                </Suspense>
            </div>
        </div>
    );
};

export default App;