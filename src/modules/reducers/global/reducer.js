// Здесь мы опишим методы которые и будут напрямую взаимодействовать со стором

// Берем доступные методы
import * as actionTypes from "./actionTypes";

// Создаем начальное состояние
const initialState = {
  todos: []
};

// Редьюсер. Он то и взаимодействет с состоянием
const Reducer = function(state = initialState, action) {
  let temp;

  switch (action.type) {
    case actionTypes.add:
      temp = {
        todos: [
          {
            id: new Date().getTime(),
            title: action.payload,
            state: false
          },
          ...state.todos
        ]
      };

      window.localStorage.setItem("todos", JSON.stringify(temp));

      return temp;
    case actionTypes.toggle:
      temp = {
        todos: [
          ...state.todos.map(todo => {
            if (todo.id === action.payload.id)
              return {
                ...todo,
                state: action.payload.state
              };

            return { ...todo };
          })
        ]
      };

      window.localStorage.setItem("todos", JSON.stringify(temp));

      return temp;
    case actionTypes.remove:
      temp = {
        todos: [...state.todos.filter(todo => todo.id !== action.payload)]
      };

      window.localStorage.setItem("todos", JSON.stringify(temp));

      return temp;
    default:
      temp = window.localStorage.getItem("todos");

      return {
        ...(temp ? JSON.parse(temp) : state)
      };
  }
};

// И его мы выпускаем наружу чтоб можно было его использовать в других компонентах
export default Reducer;
