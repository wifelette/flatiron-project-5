/**
 * @typedef {object} AddMaterialAction
 * @property {"ADD_MATERIAL"} type
 * @property {Material} item
 *
 * @typedef {object} RemoveMaterialAction
 * @property {"REMOVE_MATERIAL"} type
 * @property {string} id
 *
 * @typedef {object} InitializeMaterialsAction
 * @property {"INITIALIZE_MATERIALS"} type
 * @property {Material[]} items
 *
 * @typedef {AddMaterialAction | RemoveMaterialAction | InitializeMaterialsAction} MaterialAction
 *
 * @typedef {Material[]} MaterialState
 */

/**
 * @param {Material[] | undefined} state
 * @param {MaterialAction} action
 */
export default (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_MATERIALS": {
      return action.items;
    }

    case "ADD_MATERIAL": {
      let newList = [...state, action.item];

      newList.sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();

        if (aName < bName) {
          return -1;
        } else if (aName > bName) {
          return 1;
        } else {
          return 0;
        }
      });

      return newList;
    }

    case "REMOVE_MATERIAL": {
      return state.filter((item) => item.id !== action.id);
    }

    default: {
      return state;
    }
  }
};
