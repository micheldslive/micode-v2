import { SET_PAGE, SET_CHANGE, SET_MENU, Action, State } from "reducer/types";

export const initialState = {
  page: 0,
  change: true,
  menu: false,
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.state.page };

    case SET_CHANGE:
      return { ...state, change: action.state.change };

    case SET_MENU:
      return { ...state, menu: action.state.menu };
  }
  return state;
};
