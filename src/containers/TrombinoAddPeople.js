import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {trombinoAddPeople} from "../actions/trombino";

import TrombinoAddPeople from "../components/TrombinoAddPeople";

function mapStateToProps(state) {
  console.log("TROMBINO State", state);
  const {server, bucket, title, companies} = state.trombino;
  const {people} = state.trombino.collections;
  return {
    server,
    bucket,
    title,
    form: people,
    companies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    trombinoAddPeople,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrombinoAddPeople);
