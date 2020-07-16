import {ActionCreator, Action} from "redux";
import {Status} from "./types";

export const APP_CHANGE_STATUS = "APP_CHANGE_STATUS";

export interface ChangeStatusAction extends Action<typeof APP_CHANGE_STATUS> {
  payload: Status;
}

export type Actions = ChangeStatusAction;

export const initActionCreator: ActionCreator<ChangeStatusAction> = () => ({
  type: APP_CHANGE_STATUS,
  payload: Status.INIT,
});
