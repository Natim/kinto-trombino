import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import HomePage from "../components/HomePage";
import {createTrombino} from "../actions/trombino";


function mapStateToProps(state) {
  return state.homepage;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createTrombino,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
