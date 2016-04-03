import React, { Navigator } from "react-native";
import Onboarding from "./containers/Onboarding";
import Identification from "./containers/Identification";
import Map from "./containers/Map";

const Router = {
  getOnboardingRoute() {
    return {
      renderScene(navigator) {
        return (
          <Onboarding
            navigator={navigator}
          />
        );
      }
    };
  },

  getMapRoute() {
    return {
      renderScene(navigator) {
        return (
          <Map
            navigator={navigator}
          />
        );
      }
    };
  },

  getIdentificationRoute() {
    return {
      renderScene(navigator) {
        return (
          <Identification
            navigator={navigator}
          />
        );
      },

      configureScene() {
        return {...Navigator.SceneConfigs.FloatFromBottom, gestures: null};
      }
    };
  }
};

export default Router;
