import React, { useEffect, useState } from "react";
import fetchData from "../api/fetchData";

const useFetch = () => {
  const [allData, setAllData] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAllData([]);
    setLoading(true);
    fetchData()
      .then((res) => setAllData(res.data.products))
      .catch((e) => {
        console.error(e);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);
  return {allData,loading}
};

export default useFetch;