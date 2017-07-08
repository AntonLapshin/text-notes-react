import React from "react";
import { render } from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import App from "./containers/App/App";
import Blog from "./containers/Blog/Blog";
import createStore from "./store/create";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore({
  blog: Blog.getPreloadedState()
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
