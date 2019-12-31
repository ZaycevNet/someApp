// Без этого компонента ничего не будет работать
import React from "react";

// В этом компоненте находится представление самого дела в общем списке дел
import ItemTODO from "../todo-item/componentConnect";

const Component = function(data) {
  const no_todo_style = {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const [todos, setTODOS] = React.useState([]);

  React.useEffect(() => {
    setTODOS([
      ...data.state.global.todos.map(todo => {
        return <ItemTODO key={todo.id} todo={todo} />;
      })
    ]);
  }, [data.state.global.todos]);

  if (todos.length) {
    return <ul className="collection">{todos}</ul>;
  } else {
    return (
      <div style={no_todo_style}>
        <h5>Кажется, ты молодец и ты успел все до Нового Года!</h5>
      </div>
    );
  }
};

// Экспортируем наружу наш компонент
export default Component;
