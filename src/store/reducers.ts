import {combineReducers, Reducer} from "redux";
import {RootState, AppState, Status} from "./types";
import {Actions as AppActions, APP_CHANGE_STATUS} from "./actions";

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
});

export default createRootReducer;
