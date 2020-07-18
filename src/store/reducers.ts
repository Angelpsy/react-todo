import {combineReducers, Reducer} from "redux";
import {RootState, AppState, Status, Actions as AppActions} from "./types";
import {APP_CHANGE_STATUS} from "./actions";
import items from "./items/reducers";

const appDefaultState = {
  status: Status.IDLE,
};

const app: Reducer<AppState, AppActions> = (state = appDefaultState, action) => {
  switch (action.type) {
    case APP_CHANGE_STATUS:
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
};

const createRootReducer = (): Reducer<RootState, any> => combineReducers({
  app,
  items,
});

export default createRootReducer;
