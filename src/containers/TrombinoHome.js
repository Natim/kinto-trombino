import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import btoa from "btoa";

import TrombinoHome from "../components/TrombinoHome";

function mapStateToProps(state) {
  const {title, server, bucket, companies, people} = state.trombino;
  const payload = btoa(JSON.stringify({server, bucket}));
  return {
    displayPath: `/trombino/add-people/${payload}`,
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
