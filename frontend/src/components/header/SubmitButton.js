import React from "react";

/**
 * @param {object} props
 * @param {string} [props.css]
 * @param {string} props.body
 * @param {string} [props.size]
 * @param {string} [props.classes]
 * @param {boolean} [props.disabled]
 * @returns {JSX.Element}
 */

export default function SubmitButton({
  css: style = "success",
  body,
  size = "mt-2",
  classes,
  disabled,
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`btn btn-${style} ${size} ${classes}`}
    >
      {body}
    </button>
  );
}
