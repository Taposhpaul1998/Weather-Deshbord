import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(
        JSON.parse(localStorage.getItem(key)) ?? initialValue
    )

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;