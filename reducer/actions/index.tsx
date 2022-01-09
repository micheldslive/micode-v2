import {
  SET_PAGE,
  SET_CHANGE,
  SET_MENU,
  States,
  Action,
  DispatchType,
} from "reducer/types";

export function setPage(state: States) {
  const action: Action = {
    type: SET_PAGE,
    state,
  };

  return simulateHttpRequest(action);
}


export function setChange(state: States) {
  const action: Action = {
    type: SET_CHANGE,
    state,
  };

  return simulateHttpRequest(action);
}

export function setMenu(state: States) {
  const action: Action = {
    type: SET_MENU,
    state,
  };

  return simulateHttpRequest(action);
}

function simulateHttpRequest(action: Action) {
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
