import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import Index from "./routes/Index";

const Root = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default Root;

ReactDOM.render(<Root />, document.getElementById("realdeal"));
