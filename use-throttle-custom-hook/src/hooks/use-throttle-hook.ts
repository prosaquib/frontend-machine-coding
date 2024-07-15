import { useEffect, useRef, useState } from "react";

export default function useThrottle(throttledFn, delay) {
    const [throttleValue, setThrottleValue] = useState(throttledFn);
    const lastTime = useRef(Date.now());

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentTime = Date.now();
            if (currentTime - lastTime.current >= delay) {
                setThrottleValue(throttledFn);
                lastTime.current = currentTime;
            }
        }, delay - (Date.now() - lastTime.current));

        return () => clearTimeout(timer);
    }, [throttledFn, delay]);

    return throttleValue;
}