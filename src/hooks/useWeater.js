import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../context';

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);

    const { selectedLocation } = useContext(LocationContext)


    const fetchWeather = async (latitude, longitude) => {

        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fatching Weather Data..."
            });

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);

            if (!response.ok) {
                const errorMassage = `Fetch weather data failed: ${response.status}`;
                throw new Error(errorMassage);
            }

            const data = await response.json();

            const updatedWeatherData = {
                ...data,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            };

            setWeatherData(updatedWeatherData);

        } catch (error) {
            setError(error)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            });
        }
    }
    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Getting your location..."
        });

        if (selectedLocation.latitude && selectedLocation.longitude) {
            fetchWeather(selectedLocation.latitude, selectedLocation.longitude)
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeather(latitude, longitude);
            })
        }



    }, [selectedLocation.latitude, selectedLocation.longitude]);

    return {
        weatherData,
        loading,
        error
    };
}

export default useWeather;