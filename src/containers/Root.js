import React from "react-native";
import ExNavigator from "@exponent/react-native-navigator";
import Router from "../router";

const {
  Component,
  View,
  StatusBar
} = React;

class Root extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
        />
        <ExNavigator
          showNavigationBar={false}
          initialRoute={Router.getMapRoute()}
        />
      </View>
    );
  }
}

export default Root;
