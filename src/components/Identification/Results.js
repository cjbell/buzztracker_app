import React from "react-native";
import { find, startCase } from "lodash";
import Button from "../Button";

const {
  Component,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} = React;

const MIN_WEIGHT = 66;

const MOS_INFO = {
  "aedes": "Nice job! This mosquito is responsible for the spread of Zika, Chikungunya, Denges and Yellow Fellow.",
  "culex": "",
  "anopheles": ""
}

class Results extends Component {
  render() {
    const { hide, result, onComplete } = this.props;

    const theResult = find(result, (result) => {
      return result.weight >= MIN_WEIGHT
    });

    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center", padding: 25}}>
        <Image
          source={require("./badge.png")}
          width={120}
          height={120}
        />

        <Text style={styles.header}>
          Eggscellent job! You just identified your first Mosquito!
        </Text>

        <Text style={styles.headline}>
          You identified: {startCase(theResult.type)}
        </Text>
        <Text style={[styles.text, {marginBottom: 20}]}>
          {MOS_INFO[theResult.type]}
        </Text>
        <Button
          text="Learn More"
          onPress={onComplete}
        />
        <TouchableOpacity style={styles.learnMore} onPress={onComplete}>
          <Text style={styles.text}>See more in your area</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginBottom: 10,
    color: "#333",
    textAlign: "center"
  },
  learnMore: {
    marginTop: 15
  },
  header: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 20,
    textAlign: "center"
  },
  headline: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5
  }
});

export default Results;

