// Здесь нам не надо подключать сам реакт, так как в этом компоненте мы подключаем уже созданный нами компонент к глобальному стору

// Сей компонент необходим для подключения нашего компонента к глобальному стору
import { connect } from "react-redux";
// Подключаем ранее написанный нами компонент
import Component from "./component";

// Тут мы берем все методы из компоненты с функциями
import * as actions from "../../reducers/global/actions";

const map_state_to_props = store => ({
  state: {
    ...store
  }
});

const map_dispatch_to_props = dispatch => ({
  dispatch: {
    toggle: state => dispatch(actions.toggle(state)),
    remove: state => dispatch(actions.remove(state))
  }
});

// И экспортируем уже подключенный к глобальному стору наш компонент, теперь мы можем в нем юзать глобальные функции и переменные
export default connect(map_state_to_props, map_dispatch_to_props)(Component);
