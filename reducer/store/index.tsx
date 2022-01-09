import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import { SET_PAGE, SET_CHANGE, SET_MENU, Action, DispatchType, States } from "reducer/types";

const initialState = {
  page: 0,
  change: true,
  menu: false,
};

const reducer = (states: States = initialState, action: Action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...states,
        page: action.state.page,
      };

      case SET_CHANGE:
        return {
          ...states,
          change: action.state.change,
        };

        case SET_MENU:
          return {
            ...states,
            menu: action.state.menu,
          };
  }
  return states;
};

export const store: Store<States, Action> & { dispatch: DispatchType; } = createStore(reducer, applyMiddleware(thunk));
