import React from "react-native";
import Button from "../components/Button";
import Overlay from "../components/Map/Overlay";
import Router from "../router";

const {
  Component,
  View,
  Text,
  MapView,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} = React;

const {height, width} = Dimensions.get('window');

class Map extends Component {

  state = {
    showOverlay: true
  };

  constructor(props) {
    super(props);
    this.submitFindings = this.submitFindings.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  submitFindings() {
    const { navigator } = this.props;
    const route = Router.getIdentificationRoute();
    navigator.push(route);
  }

  onClose() {
    this.setState({showOverlay: false});
  }

  render() {
    const { showOverlay } = this.state;
    const initialRegion = {
      latitude: 42.356588,
      longitude: -71.113033,
      latitudeDelta: 0.04,
      longitudeDelta: 0.04,
    };

    const annotations = [
      {
        longitude: -71.112807,
        latitude: 42.359713
      },
      {
        longitude: -71.110672,
        latitude: 42.356504
      },
      {
        longitude: -71.110672,
        latitude: 42.356504
      },
      {
        longitude: -71.112313,
        latitude: 42.354554
      }
    ];

    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.leftContainer}></View>
          <View style={styles.middleContainer}>
            <Text style={styles.titleText}>
              buzztracker
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <TouchableOpacity>
              <Text style={{color: "#fff", textAlign: "right"}}>
                Help
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <MapView
          style={{flex: 1}}
          showsUserLocation={true}
          region={initialRegion}
          annotations={annotations}
        />
        <View style={{
          position: "absolute",
          bottom: 5,
          left: 5,
          width: width - 10
        }}>
          <Button
            text="Submit your findings"
            onPress={this.submitFindings}
          />
        </View>
        {showOverlay &&
          <Overlay
            onClose={this.onClose}
          />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333",
    paddingTop: 10,
    height: 70
  },
  leftContainer: {
    flex: 1,
    paddingLeft: 20
  },
  rightContainer: {
    flex: 1,
    paddingRight: 20
  },
  middleContainer: {
    flex: 2,
  },
  titleText: {
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 18
  },
});

export default Map;

