// Без этого компонента ничего не будет работать
import React from "react";

// Создаем наш компонент
const Component = function(data) {
  const todo = React.useRef();

  function onSubmit(event) {
    event.preventDefault();

    data.dispatch.add(todo.current.value);

    todo.current.value = "";
  }

  return (
    <form className="row" onSubmit={onSubmit}>
      <div className="input-field col s12">
        <input id="last_name" type="text" ref={todo} />
        <label htmlFor="last_name">Добавить новое дело</label>
      </div>
    </form>
  );
};

// Экспортируем наружу наш компонент
export default Component;
