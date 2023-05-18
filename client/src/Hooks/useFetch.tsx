import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface FetchState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

const useFetchData = <T,>(
  url: string,
  config?: AxiosRequestConfig
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response: AxiosResponse<T> = await axios.get(url, config);
        setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, config]);

  return { data, error, isLoading };
};

export default useFetchData;
