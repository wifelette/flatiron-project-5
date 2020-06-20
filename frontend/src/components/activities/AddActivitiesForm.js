import React, { useRef } from "react";
import "../../App.css";
import SubmitButton from "../header/SubmitButton";

export default function AddActivitiesForm() {
  function addActivities() {
    let data = new FormData(form.current);
    return;
  }

  let form = /** @type {import("react").MutableRefObject<HTMLFormElement>} */ (useRef());

  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        addActivities();
      }}
    >
      <div className="col-xl-10 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100">
          <div className="form-group card-body">
            <p className="text-lg font-weight-bold text-success text-uppercase mb-1">
              Create a New Activity
            </p>
            <label htmlFor="newDate" className="font-weight-bold">
              Activity Name
            </label>
            <input
              autoFocus
              type="text"
              name="name"
              className="form-control"
              id="newActivity"
            />
            <br />
            <p className="font-weight-bold">Materials to Add</p>
            <SubmitButton body="Create" />
          </div>
        </div>
      </div>
    </form>
  );
}
