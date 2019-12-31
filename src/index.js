// В реакте модули принято именовать компонентами
// Подключаем необходимые компоненты
import React, { Provider } from "react";
import ReactDOM from "react-dom";

// Подключение компонента самого приложения
import App from "./App";

// А так реакт рендерит само приложение в DOM
ReactDOM.render(<App />, document.getElementById("root"));
