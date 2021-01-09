import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setError(!response.ok);
    if (!response.ok) return response;
    setLoading(false);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};
