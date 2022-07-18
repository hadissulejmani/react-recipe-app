import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setData(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError("Could not fetch the data!");
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
