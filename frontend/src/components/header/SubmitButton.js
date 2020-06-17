import React from "react";

/**
 * @param {object} props
 * @param { () => void } props.onClick
 * @param {string} [props.css]
 * @param {string} props.body
 * @param {string} [props.size]
 * @param {string} [props.classes]
 * @returns {JSX.Element}
 */

export default function SubmitButton({
  css: style = "success",
  onClick,
  body,
  size = "mt-2",
  classes,
}) {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`btn btn-${style} ${size} ${classes}`}
    >
      {body}
    </button>
  );
}
