import { useState, useEffect } from "react";
import axios from "axios";

const useLoadMore = (pageNumber) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blog/?page=${pageNumber}`)
      .then((res) => {
        setData(res.data.results);
      });
  }, [pageNumber]);

  return { data };
};

export default useLoadMore;
