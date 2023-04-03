import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(() => setError("We couldn't retrieve any data"))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
