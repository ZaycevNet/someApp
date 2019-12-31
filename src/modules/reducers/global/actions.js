// Компонет который мы будем использовать в других компонентых для взаимодействия с глобальным стором

// Для начала мы берем из компонента список доступных нам методов
import * as actionTypes from "./actionTypes";

// И экспортируем все их наружу
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
