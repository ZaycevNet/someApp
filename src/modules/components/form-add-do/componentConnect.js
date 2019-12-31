// Здесь нам не надо подключать сам реакт, так как в этом компоненте мы подключаем уже созданный нами компонент к глобальному стору

// Сей компонент необходим для подключения нашего компонента к глобальному стору
import { connect } from "react-redux";
// Подключаем ранее написанный нами компонент
import Component from "./component";

// Берем из компонента действий метод для добавления новых дел, так как остальные нам тут не нужны
import { add } from "../../reducers/global/actions";

const map_state_to_props = store => ({
  state: {
    ...store
  }
});

const map_dispatch_to_props = dispatch => ({
  dispatch: {
    add: state => dispatch(add(state))
  }
});

// И экспортируем уже подключенный к глобальному стору наш компонент, теперь мы можем в нем юзать глобальные функции и переменные
export default connect(map_state_to_props, map_dispatch_to_props)(Component);
