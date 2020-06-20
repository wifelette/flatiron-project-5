import React from "react";

/**
 * @param {object} props
 *  @param {FilterDetails} [props.filter]
 * @returns {JSX.Element | null}
 */

export default function FilterButton({ filter }) {
  if (filter) {
    let body = filter.isFiltered ? filter.show : filter.hide;

    return (
      <button
        onClick={filter.onFilter}
        className={"btn btn-outline-dark mr-2 float-right shadow"}
      >
        {body}
      </button>
    );
  }

  return null;
}
