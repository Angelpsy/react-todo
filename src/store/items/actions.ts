import {ActionCreator} from "redux";
import {Item, ItemNew} from "@/types/item";

import {
  ItemAddAction,
  ItemDeleteAction,
  ItemsSetAction,
  ItemToggleCompleteAction,
  ItemUpdateAction
} from "./types";

export const ITEM_ADD = "ITEM_ADD";
export const ITEM_UPDATE = "ITEM_UPDATE";
export const ITEM_TOGGLE_COMPLETE = "ITEM_TOGGLE_COMPLETE";
export const ITEM_DELETE = "ITEM_DELETE";
export const ITEMS_SET = "ITEMS_SET";

export const itemAddActionCreator: ActionCreator<ItemAddAction> = (item: ItemNew) => ({
  type: ITEM_ADD,
  payload: {
    item,
  },
});

export const itemUpdateActionCreator: ActionCreator<ItemUpdateAction> = (id: Item["id"], item: Item) => ({
  type: ITEM_UPDATE,
  payload: {
    id,
    item,
  },
});

export const itemToggleCompleteAction: ActionCreator<ItemToggleCompleteAction> =
  (id: Item["id"]) => ({
    type: ITEM_TOGGLE_COMPLETE,
    payload: {
      id,
    },
  });

export const itemDeleteActionCreator: ActionCreator<ItemDeleteAction> = (id: Item["id"]) => ({
  type: ITEM_DELETE,
  payload: {
    id,
  },
});

export const itemsSetActionCreator: ActionCreator<ItemsSetAction> = (items: Item[]) => ({
  type: ITEMS_SET,
  payload: {
    items,
  },
});

