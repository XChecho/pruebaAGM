import React, { useEffect, useState } from "react";
import fetchData from "../api/fetchData";

const useFetch = () => {
  const [allData, setAllData] = useState([]); 
  
  useEffect(() => {
    setAllData([]);
    fetchData()
      .then((res) => setAllData(res.data.products))
      .catch((e) => {
        console.error(e);
        setAllData([]);
      })
  }, []);
  return {allData}
};

export default useFetch;