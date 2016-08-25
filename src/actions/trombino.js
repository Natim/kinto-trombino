import {
  TROMBINO_CREATE,
  TROMBINO_CREATED,
  TROMBINO_LOAD,
  TROMBINO_LOADED,
  TROMBINO_PEOPLE_FORM_LOAD,
  TROMBINO_PEOPLE_FORM_LOADED,
  TROMBINO_ADD_PEOPLE,
  TROMBINO_PEOPLE_ADDED
} from "../constants";


export function createTrombino(title, server, passphrase) {
  return {type: TROMBINO_CREATE, info: {title, server, passphrase}};
}

export function trombinoCreated(title, server, passphrase, bucket) {
  return {type: TROMBINO_CREATED, trombino: {title, server, passphrase, bucket}};
}

export function trombinoLoad(server, bucket) {
  return {type: TROMBINO_LOAD, info: {server, bucket}};
}

export function trombinoLoaded(title, server, bucket, companies, people) {
  return {type: TROMBINO_LOADED, trombino: {title, server, bucket, companies, people}};
}

export function trombinoLoadPeopleForm(server, bucket) {
  return {type: TROMBINO_PEOPLE_FORM_LOAD, info: {server, bucket}};
}

export function trombinoPeopleFormLoaded(title, server, bucket, people, companies) {
  return {type: TROMBINO_PEOPLE_FORM_LOADED, title, server, bucket, people, companies};
}

export function trombinoAddPeople(server, bucket, formData) {
  return {type: TROMBINO_ADD_PEOPLE, info: {server, bucket, formData}};
}

export function trombinoPeopleAdded() {
  return {type: TROMBINO_PEOPLE_ADDED};
}
