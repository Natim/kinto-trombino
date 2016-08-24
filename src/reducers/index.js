import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import homepage from "./homepage";
import trombino from "./trombino";


const rootReducer = combineReducers({
  homepage,
  trombino,
  routing: routerReducer,
});

export default rootReducer;

export function getAccumulatedVotes(state) {
  return fromCharts.getAccumulatedVotes(state.charts);
}
