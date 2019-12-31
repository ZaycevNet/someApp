// Без этого компонента ничего не будет работать
import React from "react";

// Компоненты самого приложения:
// компонент отвечает за фон
import Background from "./modules/components/background/component";
// этот компонент отвечает за отображение верхнего бара
import Navbar from "./modules/components/navbar/component";
// в этом компоненте бует находиться само наше приложение
import Container from "./modules/components/container/component";
// сей компонент отвечает за текстовое поле и за создания нового дела
import FormAddDo from "./modules/components/form-add-do/componentConnect";
// а тот что ниже компонент отвечает за отображение уже добавленных дел
import ListTODOS from "./modules/components/todo-list/componentConnect";

// Важный компонент, он прокидывает функции и состояния в подключенные к нему компоненты
import { Provider } from "react-redux";
// В компоненты находятся функции и состояния которые надо будет прокинуть на компоненты FormAddDo & ListTODOS
import reducer from "./modules/reducers/root-reducer-module";
// Компонент для создания глобального хранилища функций и состояний
import { createStore } from "redux";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Background />
      <Navbar />
      <Container>
        <FormAddDo />
        <ListTODOS />
      </Container>
    </Provider>
  );
}

export default App;
