import React from "react";
import FilterButton from "./FilterButton";

export default function HeaderBar() {
  return (
    <div className="container-fluid whole-page" style={{ paddingRight: "0px" }}>
      <h1 className="h3 mb-4 text-gray-800 col-xl-10">
        {"options.name"}
        <button
          type="button"
          className="btn btn-outline-success float-right shadow"
        >
          {"options.button"}
        </button>
        {/* This options.filter prop isn't fully set up, just stubbed */}
        <FilterButton filter="options.filter" />
      </h1>
    </div>
  );
}
