import {ActionCreator} from "redux";
import {Status} from "./types";
import {ChangeStatusAction} from "./types";

export const APP_CHANGE_STATUS = "APP_CHANGE_STATUS";

export const initActionCreator: ActionCreator<ChangeStatusAction> = () => ({
  type: APP_CHANGE_STATUS,
  payload: Status.INIT,
});
