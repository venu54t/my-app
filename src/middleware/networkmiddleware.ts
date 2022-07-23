import { NetworkAction } from "./../meme/meme.actions";
import React from "react";

const isNetworkAction = (action: any): boolean => {
  return !!action.method;
};
export const networkmiddleware = (store: any) => (next: any) => async (
  action: any
) => {
  //console.log(action);
  if (!isNetworkAction(action)) return;

  store.dispatch({ type: action.type });
  const data = await fetch(action.url).then((data) => data.json());
  next(<NetworkAction>JSON.parse(JSON.stringify({
    method: action.method,
    type: action.type,
    payload: data,
  })));

  return data;
};
