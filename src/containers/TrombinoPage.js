import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import btoa from "btoa";

import TrombinoPage from "../components/TrombinoPage";

function mapStateToProps(state) {
  const {title, server, passphrase, bucket} = state.trombino;
  const payload = btoa(JSON.stringify({server, bucket}));
  const baseUrl = window.location.href.replace(window.location.hash, "");
  return {
    title,
    displayPath: `/trombino/${payload}`,
    displayUrl: `${baseUrl}#/trombino/${payload}`,
    adminPath: `/trombino/${payload}`,
    adminUrl: `${baseUrl}#/trombino/${payload}`,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrombinoPage);
