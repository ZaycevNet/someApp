import Component from "./component";

import { connect } from "react-redux";

const map_state_to_props = store => ({
  state: {
    ...store
  }
});

export default connect(map_state_to_props)(Component);
