import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    console.log(...args);
    setLoading(true);
    const { data, ok } = await apiFunc(...args);
    setError(false);

    if (!ok) return setError(true);

    setLoading(false);
    setData(data);
  };
  return { data, error, loading, request };
};
