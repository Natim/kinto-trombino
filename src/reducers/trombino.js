import {
  TROMBINO_CREATED,
  TROMBINO_LOADED,
  TROMBINO_PEOPLE_FORM_LOADED
} from "../constants";


const INITIAL_STATE = {
  collections: {},
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
    case TROMBINO_PEOPLE_FORM_LOADED: {
      const {server, bucket, title, people, companies} = action;
      return {...state, collections: {...state.collections, people},
              server, bucket, companies, title};
    }
    default: {
      return state;
    }
  }
}
