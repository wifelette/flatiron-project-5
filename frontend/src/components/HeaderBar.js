import React from "react";
import FilterButton from "./FilterButton";
import { useLocation } from "react-router-dom";

export default function HeaderBar() {
  let location = useLocation();

  return (
    <div className="container-fluid whole-page" style={{ paddingRight: "0px" }}>
      <h1 className="h3 mb-4 text-gray-800 col-xl-10">
        {headerName(location.pathname)}
        <button
          type="button"
          className="btn btn-outline-success float-right shadow"
        >
          {"options.button"}
        </button>
        {/* This options.filter prop isn't fully set up, just stubbed */}
        <FilterButton filter="[button]options.filter[/button]" />
      </h1>
    </div>
  );
}

/**
 * @param {string} pathname
 * @returns {string}
 */
function headerName(pathname) {
  switch (pathname) {
    case "/":
      return "Dashboard";
    case "/activities":
      return "Activities";
    case "/materials":
      return "Materials";
    default:
      throw new Error(`unexpected pathname ${pathname}`);
  }
}
