import { useState, useCallback } from "react";

const useFetch = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpRequest = useCallback(async function (url, option, applyData) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, option);

      if (!response.ok) throw new Error("Requset Failed");
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message || "something went wrong");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, httpRequest };
};

export default useFetch;
