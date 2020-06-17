import React from "react";
import "../../App.css";
import SubmitButton from "../header/SubmitButton";

export default function AddMaterialsForm() {
  function addMaterials() {
    return;
  }

  return (
    <form>
      <div className="col-xl-10 col-md-6 mb-4">
        <div className="card border-left-success shadow">
          <div className="form-group card-body">
            <p className="text-lg font-weight-bold text-success text-uppercase mb-1">
              Create a New Material
            </p>
            <label htmlFor="newMaterialName">Material Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="newMaterial"
              placeholder="Bubbles, Chalk, Water, etc."
            />
            <SubmitButton body="Create" onClick={addMaterials} />
          </div>
        </div>
      </div>
    </form>
  );
}
