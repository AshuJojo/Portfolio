import { PaginatedResponse } from "@/types/PaginatedResponse";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

export interface useFetchResponse<T> {
  success?: T[];
  error?: string;
}

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<PaginatedResponse<T>> = await axios.get(url);
        console.log(`res`, res);
        setData(res.data.docs);
      } catch (e: unknown) {
        if (e instanceof Error) setError(e.message);
        else setError("Some Error Occurred!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
