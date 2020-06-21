import React, { useEffect, useState } from "react";
import { MATERIALS_URL } from "../../App";
import "../../App.css";
import HeaderBar from "../header/HeaderBar";
import Table from "../tables/Table";
import AddMaterialsForm from "./AddMaterialsForm";
import { useSelector, useDispatch } from "../../index";
import { destroy } from "../../utils/jsonapi";

export default function Materials() {
  let unfilteredMaterials = useSelector((state) => state.materials);

  let dispatch = useDispatch();

  // useEffect will make the Fetch call(s) run immediately when the Component renders
  // The [] tells it only to run fetchActivities the first time the component is rendered.
  // If you put the name of a variable into the [], it would mean "only do fetchAcitivites when the component renders IF that variable changes"
  // It is the modern alternative/replacement for `ComponentDidMount`
  useEffect(() => {
    fetchMaterials();
  }, []);

  // This is the fetch where we snag the current snapshop of the data in the DB, and then, we use `useState`, to persist that snapshot into React's front-end store, so we're always working with the most current data
  const fetchMaterials = async () => {
    const data = await fetch(
      `${MATERIALS_URL}.json?sort=name&include=activities`
    );

    /** @type {{ data: Material[] }} */
    const newItems = await data.json();

    dispatch({
      type: "INITIALIZE_MATERIALS",
      items: newItems.data,
    });
  };

  /**
   * @param {string} id
   */
  async function deleteMaterial(id) {
    await destroy(`${MATERIALS_URL}/${id}`);

    dispatch({ type: "REMOVE_MATERIAL", id });
  }

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
      <Table onDeleteRow={deleteMaterial} columns={columnNames} rows={rows} />
    </div>
  );
}
