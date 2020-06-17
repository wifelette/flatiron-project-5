import React, { useEffect, useState } from "react";
import { ACTIVITIES_URL } from "../App";
import "../App.css";
import HeaderBar from "./header/HeaderBar";

export default function Activities() {
  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    const data = await fetch(ACTIVITIES_URL);
    const items = await data.json();
    console.log(items);
  };

  let [isFiltered, setIsFiltered] = useState(false);

  let filterDetails = {
    hide: "Hide Unscheduled Activities",
    show: "Show Unscheduled Activities",
    isFiltered,
    onFilter: () => setIsFiltered(!isFiltered),
  };

  let columnDetails = ["Activity", "Materials", "Scheduled For"];

  return (
    <div>
      <HeaderBar
        headline="Activities"
        mainButton="Create a New Activity"
        filter={filterDetails}
      />
    </div>
  );
}
