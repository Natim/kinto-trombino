import React from "react";
import { Route, IndexRoute } from "react-router";
import { push as updatePath } from "react-router-redux";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import TrombinoPage from "./containers/TrombinoPage";
import TrombinoHome from "./containers/TrombinoHome";
import atob from "atob";

import * as trombinoActions from "./actions/trombino";

const common = {};

function loadAction(store, actions) {
  return ({params}) => {
    const {payload} = params;
    if (payload) {
      try {
        const {server, bucket, collection} = JSON.parse(atob(payload));
        for(let action of actions) {
          store.dispatch(action(server, bucket, collection));
        }
      } catch(error) {
        console.error(error);
      }
    }
  };
}


function redirectAfter(store, timeout, destination) {
  return () => {
    setTimeout(() => {
      store.dispatch(updatePath(destination));
    }, timeout);
  };
}


export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{...common, content: HomePage}} />
      <Route path="/trombino"
        components={{...common, content: TrombinoPage}} />
      <Route path="/trombino/:payload"
        components={{...common, content: TrombinoHome}}
        onEnter={loadAction(store, [trombinoActions.trombinoLoad])}/>
      <Route path="*" components={{...common, content: _ => <h1>Page not found.</h1>}}/>
    </Route>
  );
}
