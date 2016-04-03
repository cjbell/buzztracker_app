import React from "react-native";
import Button from "../Button";

const {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} = React;

const IMAGES = {
  "aedes": [
    require("./aedes_1.jpg"),
    require("./aedes_2.jpg"),
    require("./aedes_3.jpg")
  ],
  "culex": [
    require("./culex_1.jpg"),
    require("./culex_2.jpg"),
    require("./culex_3.jpg")
  ],
  "anopheles": [
    require("./anopheles_1.jpg"),
    require("./anopheles_2.jpg"),
    require("./anopheles_3.jpg")
  ]
};

const {height, width} = Dimensions.get('window');

class Species extends Component {
  render() {
    const {
      type,
      selected,
      step,
      selectType
    } = this.props;

    let styles = [
      {
        borderColor: "#fff",
        borderWidth: 2,
        marginBottom: 10
      }
    ];

    if (selected) {
      styles.push({ borderColor: "#333" });
    }

    return (
      <View style={styles}>
        <TouchableOpacity
          onPress={() => selectType(type)}
          style={{flex: 1}}>
          <Image
            source={IMAGES[type][step]}
            style={{width: width - 24, height: 150}}
            resizeMode={Image.resizeMode.cover}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Species;
