import { useEffect } from "react";
import { useState } from "react";
import { axiosInstance } from "../shared/api";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    refetch();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    axiosInstance
      .get(url)
      .then((res) => {
        setTimeout(() => {
          setData(res.data);
          setError("");
        });
      })
      .catch(() => {
        setData(null);
        setError("Some error has occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch, setData };
}

export default useFetch;
