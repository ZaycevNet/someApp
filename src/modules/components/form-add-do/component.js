import React from "react";

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

export default Component;
