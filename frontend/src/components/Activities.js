import React, { useEffect } from "react";
import { ACTIVITIES_URL } from "../App";
import "../App.css";

export default function Activities() {
  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    const data = await fetch(ACTIVITIES_URL);
    const items = await data.json();
    console.log(items);
  };
  return <div></div>;
}
