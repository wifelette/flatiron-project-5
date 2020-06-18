import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";

/**
 * @param {object} props
 *  @param {Material[] | null} props.rows
 * @returns {JSX.Element}
 */
export default function TableBody({ rows }) {
  // const itemRows = useSelector((state) => state.name);

  if (!rows) {
    return <></>;
  } else {
    return (
      <>
        {rows.map((value) => (
          <tr key={value.id}>
            <td>{value.name}</td>
            <td>{value.activities.map((item) => item.name).join(", ")}</td>
            <td>
              <button type="button" className="close delete-model">
                <span aria-hidden="true">&times;</span>
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  }
}
