// Без этого компонента ничего не будет работать
import React from "react";

// Создаем сам компонент
const Component = function() {
  const styles = {
    backgroundImage:
      "url(https://www.toptal.com/designers/subtlepatterns/patterns/christmas-colour.png)",
    position: "fixed",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    filter: "blur(1px)"
  };

  return <div style={styles}></div>;
};

// Экспортируем наружу наш компонент
export default Component;
