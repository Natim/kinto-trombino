import {
  TROMBINO_CREATE,
  TROMBINO_CREATED,
  TROMBINO_LOAD,
  TROMBINO_LOADED
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
