import React from "react-native";
import { find, startCase } from "lodash";
import Button from "../Button";

const {
  Component,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Dimensions
} = React;

const {height, width} = Dimensions.get('window');

class Overlay extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <View style={{width: width, height: height, position: "absolute", top: 0, backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <View style={{
          position: "absolute",
          width: 280,
          height: 280,
          top: 180,
          left: 50,
          backgroundColor: "#fff",
          borderRadius: 5,
          padding: 10
        }}>
          <View style={{flex: 1, alignItems: "center"}}>
            <Image
              source={require("./logo.png")}
              width={80}
              height={80}
            />
          </View>

          <Text style={{fontSize: 20, marginTop: 15, marginBottom: 15, textAlign: "center"}}>
            Welcome to the club!
          </Text>

          <Text style={{textAlign: "center", marginBottom: 10}}>
            There are <Text style={{fontWeight: "bold"}}>12 others</Text> in the Cambridgeport team.
          </Text>

          <Text style={{textAlign: "center", marginBottom: 20}}>
            Protip: Increase your findings by building a trap.
          </Text>

          <Button
            text="OK, got it"
            onPress={onClose}
          />
        </View>
      </View>
    );
  }
}

export default Overlay;
