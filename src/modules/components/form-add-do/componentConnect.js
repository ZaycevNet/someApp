import { connect } from "react-redux";
import Component from "./component";

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

export default connect(map_state_to_props, map_dispatch_to_props)(Component);
