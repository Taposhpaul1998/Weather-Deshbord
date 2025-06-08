import { useContext } from 'react';
import searchIcon from '../../assets/search.svg';
import { LocationContext } from '../../context';
import { getLocationByName } from '../../data/location-data';
import { useDebounse } from '../../hooks';

export default function Search() {
    const { setSelectedLocation } = useContext(LocationContext)

    const doSearch = useDebounse((trem) => {

        const fecthLocation = getLocationByName(trem)
        setSelectedLocation({ ...fecthLocation });

    }, 500)

    const heandleChange = (e) => {
        const value = e.target.value;
        doSearch(value)

    }

    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required
                    onChange={heandleChange}
                />
                <img src={searchIcon} />
            </div>
        </form>
    )
}
