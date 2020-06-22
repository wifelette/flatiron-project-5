import React, { useEffect, useState } from "react";
import { ACTIVITIES_URL, MATERIALS_URL } from "../../App";
import "../../App.css";
import HeaderBar from "../header/HeaderBar";
import Table from "../tables/Table";
import AddActivitiesForm from "./AddActivitiesForm";
import { shortDate } from "../../utils/dates";
import { useSelector, useDispatch } from "../../index";
import { destroy, getJSON } from "../../utils/jsonapi";

export default function Activities() {
  let unfilteredActivities = useSelector((state) => state.activities);

  let dispatch = useDispatch();

  useEffect(() => {
    fetchActivities();
    fetchMaterials();
  }, []);

  const fetchActivities = async () => {
    const data = await fetch(
      `${ACTIVITIES_URL}.json?sort=name&include=materials,days`
    );

    /** @type {{ data: Activity[] }} */
    const newActivities = await data.json();

    dispatch({
      type: "INITIALIZE_ACTIVITIES",
      items: newActivities.data,
    });
  };

  const fetchMaterials = async () => {
    const newMaterials = await getJSON(
      `${MATERIALS_URL}.json?sort=name&include=activities`
    );

    dispatch({
      type: "INITIALIZE_MATERIALS",
      items: newMaterials.data,
    });
  };

  /**
   * @param {string} id
   */
  async function deleteActivity(id) {
    await destroy(`${ACTIVITIES_URL}/${id}`);

    dispatch({ type: "REMOVE_ACTIVITY", id });
  }

  let [isFiltered, setIsFiltered] = useState(false);

  let filterDetails = {
    hide: "Hide Unscheduled Activities",
    show: "Show Unscheduled Activities",
    isFiltered,
    onFilter: () => setIsFiltered(!isFiltered),
  };

  let [isShowingForm, setShowingForm] = useState(false);

  let columnDetails = ["Activity", "Materials", "Scheduled For"];

  let rows = null;
  let activities = unfilteredActivities;

  if (activities !== null) {
    if (isFiltered) {
      activities = activities.filter((a) => a.days.length > 0);
    }

    rows = activities.map((activity) => {
      let columns = [
        activity.name,
        activity.materials.map((m) => m.name).join(", "),
        activity.days.map((d) => shortDate(d.date)).join(", "),
      ];

      return {
        id: activity.id,
        columns,
      };
    });
  }

  return (
    <div>
      <HeaderBar
        headline="Activities"
        mainButton="Create a New Activity"
        filter={filterDetails}
        onButtonClick={() => {
          setShowingForm(!isShowingForm);
        }}
      />
      {isShowingForm ? (
        <AddActivitiesForm onSave={() => setShowingForm(false)} />
      ) : null}
      <Table onDeleteRow={deleteActivity} columns={columnDetails} rows={rows} />
    </div>
  );
}
