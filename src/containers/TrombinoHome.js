import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import btoa from "btoa";

import TrombinoHome from "../components/TrombinoHome";

function mapStateToProps(state) {
  const {title, companies, people} = state.trombino;
  return {
    title,
    companies,
    people,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrombinoHome);
