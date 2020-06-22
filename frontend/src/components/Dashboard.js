import React, { useState, useEffect } from "react";
import "../App.css";
import HeaderBar from "./header/HeaderBar";
import { useSelector, useDispatch } from "../index";
import AddDaysForm from "./days/AddDaysForm";
import { DAYS_URL, ACTIVITIES_URL } from "../App";
import { getJSON } from "../utils/jsonapi";
import Schedule from "./days/Schedule";

export default function Dashboard() {
  let dispatch = useDispatch();

  let [isShowingForm, setShowingForm] = useState(false);

  useEffect(() => {
    fetchDays();
    fetchActivities();
  }, []);

  const fetchDays = async () => {
    /** @type {{ data: Day[] }} */
    const newDays = await getJSON(
      `${DAYS_URL}.json?sort=date&include=activities.materials`
    );

    dispatch({
      type: "INITIALIZE_DAYS",
      items: newDays.data,
    });
  };

  const fetchActivities = async () => {
    const newActivities = await getJSON(
      `${ACTIVITIES_URL}.json?sort=name&include=materials,days`
    );

    dispatch({
      type: "INITIALIZE_ACTIVITIES",
      items: newActivities.data,
    });
  };

  let days = useSelector((state) => state.days);

  return (
    <div>
      <HeaderBar
        headline="Dashboard"
        mainButton="Add a New Day"
        onButtonClick={() => {
          setShowingForm(!isShowingForm);
        }}
      />
      {isShowingForm ? (
        <AddDaysForm onSave={() => setShowingForm(false)} />
      ) : null}
      {days.map((day) => (
        <Schedule key={day.id} day={day} />
      ))}
    </div>
  );
}
