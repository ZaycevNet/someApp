// Без этого компонента ничего не будет работать
import React from "react";

// Создаем наш компонент
const Component = function() {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a className="brand-logo">Список дел</a>
      </div>
    </nav>
  );
};

// Экспортируем наружу наш компонент
export default Component;
