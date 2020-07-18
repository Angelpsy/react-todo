import {Item, ItemNew} from '@/types/item'
import {Action} from 'redux';
import {ITEM_ADD, ITEM_DELETE, ITEM_TOGGLE_COMPLETE, ITEM_UPDATE, ITEMS_SET} from './actions';

export interface State {
  items: Item[];
}

export interface ItemAddAction extends Action<typeof ITEM_ADD> {
  payload: {
    item: ItemNew,
  };
}

export interface ItemUpdateAction extends Action<typeof ITEM_UPDATE> {
  payload: {
    id: Item['id'],
    item: Item,
  };
}

export interface ItemToggleCompleteAction extends Action<typeof ITEM_TOGGLE_COMPLETE> {
  payload: {
    id: Item['id'],
  };
}

export interface ItemDeleteAction extends Action<typeof ITEM_DELETE> {
  payload: {
    id: Item['id'],
  };
}

export interface ItemsSetAction extends Action<typeof ITEMS_SET> {
  payload: {
    items: Item[],
  };
}

export type Actions = ItemAddAction | ItemUpdateAction | ItemToggleCompleteAction | ItemDeleteAction | ItemsSetAction;
