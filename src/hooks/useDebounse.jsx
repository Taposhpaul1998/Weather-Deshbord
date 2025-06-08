import { useEffect, useRef } from 'react';


export default function useDebounse(callback, delay) {
    const timeoutIdRef = useRef(null);
    useEffect(() => {
        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current)
            }
        }
    }, [])


    const debounseCallback = (...args) => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current)
        }
        timeoutIdRef.current = setTimeout(() => {
            callback(...args);
        }, delay)
    }
    return debounseCallback;
}
