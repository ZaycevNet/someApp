import React from "react";

import Background from "./modules/components/background/component";
import Navbar from "./modules/components/navbar/component";
import Container from "./modules/components/container/component";
import FormAddDo from "./modules/components/form-add-do/componentConnect";
import ListTODOS from "./modules/components/todo-list/componentConnect";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./modules/reducers/root-reducer-module";
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
