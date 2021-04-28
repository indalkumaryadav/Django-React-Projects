import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const SEARCH = "search";
const Search = () => {
  const { q } = useParams();
  return (
    <>
      <Helmet>
        <title>search</title>
      </Helmet>
      <h2>{q}</h2>
    </>
  );
};

export default Search;
