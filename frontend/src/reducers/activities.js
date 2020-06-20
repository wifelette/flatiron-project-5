/**
 * @typedef {object} AddActivityAction
 * @property {"ADD_ACTIVITY"} type
 * @property {Activity} item
 *
 * @typedef {object} RemoveActivityAction
 * @property {"REMOVE_ACTIVITY"} type
 * @property {string} id
 *
 * @typedef {object} InitializeActivitiesAction
 * @property {"INITIALIZE_ACTIVITIES"} type
 * @property {Activity[]} items
 *
 * @typedef {AddActivityAction | RemoveActivityAction | InitializeActivitiesAction} ActivityAction
 *
 * @typedef {Activity[]} ActivityState
 */

/**
 * @param {Activity[] | undefined} state
 * @param {ActivityAction} action
 */
export default (state = [], action) => {
  switch (action.type) {
    // This action is used when a new activity list is returned from the server,
    // because it's already sorted on the backend
    case "INITIALIZE_ACTIVITIES": {
      return action.items;
    }

    // This action is used when we add a new activity locally, so that it is
    // inserted in the appropriate place in the list
    case "ADD_ACTIVITY": {
      let newList = [...state, action.item];

      newList.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });

      return newList;
    }

    case "REMOVE_ACTIVITY": {
      return state.filter((item) => item.id !== action.id);
    }

    default: {
      return state;
    }
  }
};
