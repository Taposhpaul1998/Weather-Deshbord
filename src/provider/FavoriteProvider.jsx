import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";


const FavoriteProvider = ({ children }) => {

    const [storedValue, setStoredValue] = useLocalStorage("favorites", []);

    const addFavorite = (latitude, longitude, location) => {

        setStoredValue([
            ...storedValue,
            {
                latitude: latitude,
                longitude: longitude,
                location: location
            }]
        )
    }

    const removeFavorite = (location) => {
        setStoredValue(
            storedValue.filter((item) => item.location !== location)
        );
    }

    return (
        <FavoriteContext.Provider value={{ favorites: storedValue, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );

}

export default FavoriteProvider;
