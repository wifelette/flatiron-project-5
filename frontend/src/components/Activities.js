import React, { useEffect } from "react";
import "../App.css";
import { ACTIVITIES_URL } from "../App";

export default function Activities() {
  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    const data = await fetch(ACTIVITIES_URL);
    const items = await data.json;
    console.log(items);
  };
  return <div></div>;
}
