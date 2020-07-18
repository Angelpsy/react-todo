import { createSelector } from "reselect";

import {RootState} from "../types";
import {Item} from '@/types/item';

export const getAllItems = (state: RootState): Item[] => state.items.items;
export const getCountAllItems = (state: RootState): number => getAllItems(state).length;
const getCompletedItems = createSelector(
  getAllItems,
  items => items.filter(it => it.complete),
)
export const getCountCompletedItems = (state: RootState): number => getCompletedItems(state).length;
const getUncompletedItems = createSelector(
  getAllItems,
  items => items.filter(it => !it.complete),
)
export const getCountUncompletedItems = (state: RootState): number => getUncompletedItems(state).length;
