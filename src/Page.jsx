import { useContext, useEffect, useState } from 'react';
import Header from "./components/header/Header";
import WeatherBord from "./components/weather/WeatherBord";

import { WeatherContext } from "./context";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";


export default function Page() {

    const { weatherData, loading, error } = useContext(WeatherContext);

    const [climateImage, setClimateImage] = useState('')

    function getBgImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

    useEffect(() => {

        const bgImage = getBgImage(weatherData.climate)
        setClimateImage(bgImage)

    }, [weatherData.climate])

    return (
        <>
            {
                loading.state ? (
                    <div className="flex items-center justify-center h-screen">
                        <p className="text-center text-xl font-semibold text-green-500">{loading.message}</p>
                    </div>
                ) : (
                    <div
                        style={{ backgroundImage: `url('${climateImage}')` }}
                        className="grid place-items-center h-screen">
                        <Header />
                        <WeatherBord />
                    </div>
                )
            }
        </>
    )
}
