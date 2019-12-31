import Component from "./component";

import { connect } from "react-redux";

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

export default connect(map_state_to_props, map_dispatch_to_props)(Component);
