import { bindActionCreators, Dispatch } from "redux";
import { State } from "src/reducer/types";
import * as action from "src/reducer/actions";

export const mapStateToProps = (state: State) => ({ state });

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(action, dispatch);
