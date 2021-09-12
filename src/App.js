import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import "./App.css";
import Counter from "./components/Counter";
import rootReducer from "./reducers";

const store = createStore(rootReducer, devToolsEnhancer())

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
