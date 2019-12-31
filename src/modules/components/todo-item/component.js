// Без этого компонента ничего не будет работать
import React from "react";

// Создаем наш компонент
const Component = function({ dispatch, todo }) {
  const checkbox = React.useRef();

  const stylesheets = {
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "20px",
      paddingBottom: "20px"
    }
  };

  function onClick(event) {
    event.preventDefault();

    dispatch.remove(todo.id);
  }
  function onChange(event) {
    dispatch.toggle({
      id: todo.id,
      state: checkbox.current.checked
    });
  }

  return (
    <li className="collection-item" style={stylesheets.item}>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          ref={checkbox}
          checked={todo.state}
        />
        <span className="black-text">{todo.title}</span>
      </label>
      <a href="#" className="red-text" onClick={onClick}>
        удалить
      </a>
    </li>
  );
};

// Экспортируем наружу наш компонент
export default Component;
