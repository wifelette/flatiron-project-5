import React, { useEffect, useState } from "react";
import { MATERIALS_URL } from "../../App";
import "../../App.css";
import HeaderBar from "../header/HeaderBar";
import Table from "../tables/Table";
import AddMaterialsForm from "./AddMaterialsForm";

export default function Materials() {
  // useState returns a set of things: (1) the current state, (2) a function used to update the current state. Then, later down below, we'll make a fetch request, in which we use `setItems` to update `items` to the current state of the data in the backend DB
  let [unfilteredMaterials, setUnfilteredMaterials] = useState(
    /** @type {Material[] | null} */ (null)
  );

  // useEffect will make the Fetch call(s) run immediately when the Component renders
  // The [] tells it only to run fetchActivities the first time the component is rendered.
  // If you put the name of a variable into the [], it would mean "only do fetchAcitivites when the component renders IF that variable changes"
  useEffect(() => {
    fetchMaterials();
  }, []);

  // This is the fetch where we snag the current snapshop of the data in the DB, and then, we use `useState`, to persist that snapshot into React's front-end store, so we're always working with the most current data
  const fetchMaterials = async () => {
    const data = await fetch(`${MATERIALS_URL}?sort=name&include=activities`);
    const newItems = await data.json();
    setUnfilteredMaterials(newItems.data);
  };

  let [isFiltered, setIsFiltered] = useState(false);

  let filterDetails = {
    hide: "Hide Unused Materials",
    show: "Show Unused Materials",
    isFiltered,
    onFilter: () => setIsFiltered(!isFiltered),
  };

  let [isShowingForm, setShowingForm] = useState(false);

  let columnNames = ["Material", "Used For"];

  let rows = null;
  let materials = unfilteredMaterials;

  if (materials !== null) {
    if (isFiltered) {
      materials = materials.filter((m) => m.activities.length > 0);
    }

    rows = materials.map((material) => {
      let columns = [
        material.name,
        material.activities.map((a) => a.name).join(", "),
      ];

      return {
        id: material.id,
        columns,
      };
    });
  }

  return (
    <div>
      <HeaderBar
        headline="Materials"
        mainButton="Create a New Material"
        filter={filterDetails}
        onButtonClick={() => {
          setShowingForm(!isShowingForm);
        }}
      />
      {isShowingForm ? <AddMaterialsForm /> : null}
      <Table columns={columnNames} rows={rows} />
    </div>
  );
}
