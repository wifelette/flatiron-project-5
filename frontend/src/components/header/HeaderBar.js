import React from "react";
import FilterButton from "./FilterButton";
import AddMaterialsForm from "../materials/AddMaterialsForm";

/**
 *
 * @param {object} props
 *  @param {string} props.headline
 *  @param {string} props.mainButton
 *  @param {FilterDetails} [props.filter]
 *  @param { () => void } [props.onButtonClick]
 * @returns {JSX.Element}
 */

export default function HeaderBar({
  headline,
  mainButton,
  filter,
  onButtonClick = () => {},
}) {
  // const showForm = () => {
  //   return <AddMaterialsForm />;
  // };

  return (
    <div className="container-fluid whole-page" style={{ paddingRight: "0px" }}>
      <h1 className="h3 mb-4 text-gray-800 col-xl-10">
        {headline}
        <button
          type="button"
          className="btn btn-outline-success float-right shadow"
          onClick={onButtonClick}
        >
          {mainButton}
        </button>
        <FilterButton filter={filter} />
      </h1>
    </div>
  );
}
