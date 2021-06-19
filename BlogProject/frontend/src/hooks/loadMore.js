import { useState, useEffect } from "react";
import axios from "axios";

const useLoadMore = (pageNumber) => {
  const [data, setData] = useState([]);
  const [btnState, btnSetState] = useState(true);
  let cencel;
  useEffect(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/blog/?page=${pageNumber}`,
      cancelToken: new axios.CancelToken((c) => (cencel = c)),
    })
      .then(function (res) {
        setData([...data, ...res.data.results]);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        console.log(e);
        btnSetState(false);
      });
    return () => cencel();
  }, [pageNumber]);

  return { data, btnState };
};

export default useLoadMore;
