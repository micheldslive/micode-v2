import {
  SET_PAGE,
  SET_CHANGE,
  SET_MENU,
  State,
  Action,
  DispatchType,
} from "reducer/types";

export function setPage(state: State) {
  const action: Action = {
    type: SET_PAGE,
    state,
  };

  return simulateHttpRequest(action);
}


export function setChange(state: State) {
  const action: Action = {
    type: SET_CHANGE,
    state,
  };

  return simulateHttpRequest(action);
}

export function setMenu(state: State) {
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
