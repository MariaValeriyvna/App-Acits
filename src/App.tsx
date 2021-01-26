import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { LogPage } from "./shared/LogPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { TodayPage } from "./shared/TodayPage";
import { AnimalsPage } from "./shared/AnimalsPage";
import './main.global.css';

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem("tokenAcits")) setLogin(true);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
         {login ? <Redirect to="/today"/> : <Redirect to="/login" />}
          <Switch>
            <Route exact path="/login">
              <LogPage />
            </Route>
            <Route exact path="/today">
              <TodayPage />
            </Route>
            <Route exact path="/animals">
              <AnimalsPage />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </Provider>
  );
}
export const App = hot(() => <AppComponent />);
