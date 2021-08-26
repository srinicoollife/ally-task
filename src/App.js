import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import OkrList from "./screens/okrlist";
import Loader from "./components/loader/loader";

//redux store
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./container/reducers/reducer";
const store = createStore(appReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Loader />
        <div className="container">
          <HashRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <OkrList />
              </Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;
