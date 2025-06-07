import { useContext, useEffect, useState } from "react";
import redHeartIcon from "../../assets/heart-red.svg";
import heartIcom from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddFavorite() {

    const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { location, longitude, latitude } = weatherData

    const [toggleFavorite, setToggleFavorite] = useState(false);

    useEffect(() => {
        const found = favorites.find(item => item.location === location)
        setToggleFavorite(found)
    }, [])

    const handleAddFavorite = () => {

        const found = favorites.find(item => item.location === location)

        if (!found) {
            addFavorite(latitude, longitude, location)
        } else {
            removeFavorite(location)
        }

        setToggleFavorite(!toggleFavorite);



    }


    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    onClick={handleAddFavorite}
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer">
                    <span>Add to Favourite</span>
                    <img src={toggleFavorite ? redHeartIcon : heartIcom} alt="" />
                </button>

            </div>
        </div>
    )
}
