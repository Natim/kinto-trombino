import { push as updatePath } from "react-router-redux";
import { put } from "redux-saga/effects";
import btoa from "btoa";
import KintoClient from "kinto-http";

import { trombinoCreated, trombinoLoaded } from "../actions/trombino";
import config from "../kinto_config.json";


function* createBucket(client, passphrase, bucket, title) {
  try {
    // Create the bucket in case it doesn't exist.
    const bucketPermissions = {"read": ["system.Everyone"]};
    const headers = {Authorization: "Basic " + btoa(`token:${passphrase}`)};
    yield client.createBucket(bucket, {headers, data: {title},
                                       permissions: bucketPermissions, safe: true});
    const permissions = {"record:create": ["system.Authenticated"]};
    console.log(config);
    yield client.bucket(bucket).createCollection("companies", {headers, data: config.collections.companies, permissions, safe: true});
    yield client.bucket(bucket).createCollection("people", {headers, data: config.collections.people, permissions, safe: true});
  } catch(e) {
    throw e;
  }
}


export function* trombinoCreate(getState, action) {
  const {info} = action;
  const {title, server, passphrase} = info;

  // Create a bucket name from the title
  const bucket = `${title} ${btoa(Math.random()).substring(19, 24)}`.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

  const client = new KintoClient(server);

  yield createBucket(client, passphrase, bucket, title);
  yield put(trombinoCreated(title, server, passphrase, bucket));
  yield put(updatePath("/trombino"));
}


export function* trombinoLoad(getState, action) {
  const {info} = action;
  const {server, bucket} = info;
  const client = new KintoClient(server);
  const {title} = yield client.bucket(bucket).getData();
  const companies = yield client.bucket(bucket).collection("companies").listRecords();
  const people = yield client.bucket(bucket).collection("people").listRecords();
  yield put(trombinoLoaded(title, server, bucket, companies, people));
}


export function* voteSubmit(getState, action) {
  const {note} = action;
  const record = {note, submitted: new Date().toISOString()};

  const {trombino: trombinoState} = getState();
  const {server, bucket, collection} = trombinoState.trombino;
  const client = new KintoClient(server);
  yield client.bucket(bucket)
              .collection(collection)
              .createRecord(record);
  yield put(updatePath("/thanks"));
}
