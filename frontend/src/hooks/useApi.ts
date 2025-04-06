import { useState, useEffect } from "react";
import apiClient from "@/api/apiClient";
import { AxiosRequestConfig, Method } from "axios";

interface UseApiResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch: (newData?: T, newQueryParams?: unknown) => void;
}

interface UseApiOptions {
  url: string;
  method: Method;
  data?: unknown;
  config?: AxiosRequestConfig;
  queryPrams?: unknown;
  auto?: boolean;
}

export function useApi<T>({
  url,
  method,
  data,
  config,
  queryPrams,
  auto = true,
}: UseApiOptions): UseApiResult<T> {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [trigger, setTrigger] = useState<number>(0);
  const [requestData, setRequestData] = useState<unknown>(data);
  const [requestParams, setRequestParams] = useState<unknown>(queryPrams);

  const refetch = (newData?: T, newQueryParams?: unknown): void => {
    if (newData !== undefined) {
      setRequestData(newData);
    }

    if (newQueryParams !== undefined) {
      setRequestParams(newQueryParams);
    }

    setTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (!auto && trigger === 0) return;

    let isMounted = true;
    setLoading(true);

    apiClient
      .request<T>({
        url,
        method,
        data: requestData,
        params: requestParams,
        ...config,
      })
      .then((res) => {
        if (isMounted) {
          setResponse(res.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setResponse(null);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [auto, config, requestData, method, trigger, url, requestParams]);

  return { data: response, error, loading, refetch };
}
