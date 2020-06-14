import React, { useEffect, useState } from "react";
import { MATERIALS_URL } from "../App";
import "../App.css";
import HeaderBar from "./header/HeaderBar";

export default function Materials() {
  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    const data = await fetch(MATERIALS_URL);
    const items = await data.json();
    console.log(items);
  };

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
