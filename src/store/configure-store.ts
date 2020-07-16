import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension/logOnlyInProduction";
import createRootReducer from "./reducers";
import {RootState} from "./types";

const composeEnhancers = composeWithDevTools({});
const middleware: any[] = [
];

export default function configureStore(preloadedState?: RootState): Store<RootState> {
  return createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}
