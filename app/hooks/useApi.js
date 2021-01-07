import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    if (!response.ok) return setError(true);
    setLoading(false);
    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};
