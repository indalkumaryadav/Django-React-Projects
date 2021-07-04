import React from "react";
import { Divider } from "@material-ui/core";

const Search = ({ style }) => {
  return (
    <div style={style}>
      <input
        style={{
          outline: "none",
          height: 40,
          border: "1px solid lightgray",
          width: "100%",
          borderRadius: 50,
          paddingLeft: 20,
          fontSize: 16,
          marginTop: 10,
          marginLeft: 4,
        }}
      />
    </div>
  );
};

export default Search;
