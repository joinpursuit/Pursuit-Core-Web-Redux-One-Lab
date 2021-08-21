import { Provider } from "react-redux";
import { createStore } from "redux";

import "./App.css";
import Counter from "./components/Counter";
import rootReducer from "./reducers";

function App() {
  return (
    <Provider store={createStore(rootReducer)}>
      <div className="app">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
