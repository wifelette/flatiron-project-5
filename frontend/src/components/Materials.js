import React, { useState } from "react";
import "../App.css";
import HeaderBar from "./header/HeaderBar";

export default function Materials() {
  let [isFiltered, setIsFiltered] = useState(false);

  let filterDetails = {
    hide: "Hide Unused Materials",
    show: "Show Unused Materials",
    isFiltered,
    onFilter: () => setIsFiltered(!isFiltered),
  };

  return (
    <div>
      <HeaderBar
        headline="Materials"
        mainButton="Create a New Material"
        filter={filterDetails}
      />
    </div>
  );
}
