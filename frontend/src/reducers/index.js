import { combineReducers } from "redux";
import activities from "./activities";
import materials from "./materials";

/**
 * @typedef {import("./activities").ActivityAction | import("./materials").MaterialAction} AppAction
 * @typedef { { activities: import("./activities").ActivityState, materials: import("./materials").MaterialState } } AppState
 */

export const allReducers = combineReducers({
  activities,
  materials,
});
