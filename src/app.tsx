import React, {useEffect} from "react";
import {hot} from "react-hot-loader/root";
import {connect} from "react-redux";
import {Dispatch, Action} from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {initActionCreator} from "./store/actions";

import {Status, RootState} from "./store/types";

const {lazy, Suspense} = React;
const PageHome = lazy(() =>
  import(/* webpackChunkName: "page-home" */"./pages/home"));
const PageNotFound = lazy(() =>
  import(/* webpackChunkName: "page-not-found" */"./pages/not-found"));

interface StateProps {
  status: Status;
}

interface DispatchProps {
  init: () => void;
}

const App: React.FC<StateProps & DispatchProps> = (props) => {
  useEffect(() => {
    props.init();
  }, [props]);

  return (
    <div className="app">
      <Router>
        <Suspense fallback={null}>
          <Switch>
            <Route path='/' exact>
              <PageHome/>
            </Route>
            <Route>
              <PageNotFound/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};


const mapStateToProps = (state: RootState): StateProps => {
  return {
    status: state.app.status,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    init: (): Action => dispatch(initActionCreator()),
  };
};

export {App};
export default hot(
  connect<StateProps, DispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(App)
);
