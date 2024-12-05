import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setIsPending(true);
            setError(null);  // Reset error state before new fetch
            console.log(`Fetching data from ${url}`);

            try {
                const res = await fetch(url, { signal });
                console.log(`Fetch response status: ${res.status}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const json = await res.json();
                console.log('Fetch JSON:', json);
                if (!signal.aborted) {
                    setData(json);
                    setIsPending(false);
                    console.log('Data fetched successfully', json);
                }
            } catch (err) {
                if (!signal.aborted) {
                    setIsPending(false);
                    setError("Couldn't fetch the data");
                    console.error('Fetch error:', err);
                }
            }
        };

        fetchData();

        return () => {
            console.log('Aborting fetch for', url);
            controller.abort();
        };
    }, [url]);

    return { data, isPending, error };
}
