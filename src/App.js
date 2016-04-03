import React from "react-native";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";

const {
  Component,
} = React;

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
