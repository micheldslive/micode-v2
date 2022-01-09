import { bindActionCreators, Dispatch } from "redux";
import * as action from "reducer/actions";
import { States } from "reducer/types";

export const mapStateToProps = (states: States) => ({ states });

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(action, dispatch);
