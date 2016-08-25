import { takeEvery } from "redux-saga";

import * as c from "../constants";
import * as routeSagas from "./route";
import * as trombinoSagas from "./trombino";


/**
 * @param {function} getState Function to obtain the current store state.
 */
export default function* rootSaga(getState) {
  yield [
    // route
    takeEvery(c.ROUTE_UPDATED, routeSagas.routeUpdated, getState),
    // trombino
    takeEvery(c.TROMBINO_CREATE, trombinoSagas.trombinoCreate, getState),
    takeEvery(c.TROMBINO_LOAD, trombinoSagas.trombinoLoad, getState),
    takeEvery(c.TROMBINO_PEOPLE_FORM_LOAD, trombinoSagas.trombinoPeopleFormLoad, getState),
    takeEvery(c.TROMBINO_ADD_PEOPLE, trombinoSagas.trombinoAddPeople, getState),
  ];
}
