import {
  TROMBINO_CREATED,
  TROMBINO_LOADED
} from "../constants";


const INITIAL_STATE = {
};

export default function trombino(state=INITIAL_STATE, action) {
  switch(action.type) {
    case TROMBINO_CREATED: {
      const {trombino} = action;
      return {...state, ...trombino};
    }
    case TROMBINO_LOADED: {
      const {trombino} = action;
      return {...state, ...trombino};
    }
    default: {
      return state;
    }
  }
}
