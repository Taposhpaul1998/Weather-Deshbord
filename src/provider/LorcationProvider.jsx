import { useState } from 'react';
import { LocationContext } from "../context";


const LocationProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        longitude: "",
        latitude: ""
    })

    return (
        <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
            {
                children
            }
        </LocationContext.Provider>
    )

}

export default LocationProvider;
