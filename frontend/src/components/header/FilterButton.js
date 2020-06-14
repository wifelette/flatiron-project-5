import React from "react";
import SubmitButton from "./SubmitButton";

/**
 * @param {object} props
 *  @param {FilterDetails} [props.filter]
 * @returns {JSX.Element | null}
 */

export default function FilterButton({ filter }) {
  if (filter) {
    let body = filter.isFiltered ? filter.show : filter.hide;

    return (
      <SubmitButton
        onClick={filter.onFilter}
        css="outline-dark"
        size="mr-2"
        classes="float-right shadow"
        body={body}
      />
    );
  }

  return null;
}
