import {Reducer} from "redux";
import {nanoid} from "nanoid";
import {Actions, State} from "./types";
import {ITEM_ADD, ITEM_DELETE, ITEM_TOGGLE_COMPLETE, ITEM_UPDATE, ITEMS_SET,} from "./actions";
import {Item} from "@/types/item";

const defaultState: State = {
  items: [],
};

const reducers: Reducer<State, Actions> = (state = defaultState, action) => {
  switch (action.type) {
    case ITEM_ADD: {
      const items: Item[] = [...state.items, {
        id: nanoid(),
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
        ...action.payload.item,
      }];
      return {
        ...state,
        items,
      };
    }
    case ITEM_UPDATE: {
      const index = state.items.findIndex((it) => it.id === action.payload.id);
      const items = [...state.items].splice(index, 1, {
        ...action.payload.item,
        updatedAt: (new Date()).toISOString(),
      });
      return {
        ...state,
        items,
      };
    }
    case ITEM_TOGGLE_COMPLETE: {
      const index = state.items.findIndex((it) => it.id === action.payload.id);
      const items = [...state.items].splice(index, 1, {
        ...state.items[index],
        complete: !state.items[index].complete,
        updatedAt: (new Date()).toISOString(),
      });
      return {
        ...state,
        items,
      };
    }
    case ITEM_DELETE: {
      const index = state.items.findIndex((it) => it.id === action.payload.id);
      const items = [...state.items].splice(index, 1);
      return {
        ...state,
        items,
      };
    }
    case ITEMS_SET:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

export default reducers;
