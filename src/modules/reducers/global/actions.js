import * as actionTypes from "./actionTypes";

export const add = payload => ({
  type: actionTypes.add,
  payload
});

export const toggle = payload => ({
  type: actionTypes.toggle,
  payload
});

export const remove = payload => ({
  type: actionTypes.remove,
  payload
});
