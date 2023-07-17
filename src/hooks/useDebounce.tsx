import React from "react";

function useDebouce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if(value !== "") {
                setDebouncedValue(value);
            }
        }, delay)

        return () => clearTimeout(timer);
    }, [value, delay])
    
    return debouncedValue;
}

export { useDebouce };