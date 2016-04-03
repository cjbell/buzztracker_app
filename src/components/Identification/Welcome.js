import React from "react-native";
import Button from "../Button";

const {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} = React;

class Welcome extends Component {
  render() {
    const { hide, onComplete } = this.props;

    return (
      <View style={styles.container}>
        <Image
          source={require("./logo.png")}
          width={120}
          height={120}
        />
        <Text style={styles.header}>
          Lets Get Started!
        </Text>
        <Text style={styles.text}>
          We're going to show you some pictures, do any of them look
          like the Mosquito you're identifying?
        </Text>
        <Text style={[styles.text, {fontWeight: "bold"}]}>
          Here are some things to look out for:
        </Text>
        <Text style={styles.text}>
          * Are the antenna slim or fuzzy?
        </Text>
        <Text style={styles.text}>
          * What's the color of the mosquito?
        </Text>
        <Text style={[styles.text, {marginBottom: 40}]}>
          * Does it have spots or stripes?
        </Text>
        <Button
          onPress={hide}
          text={"Go!"}
        />
        <TouchableOpacity style={styles.learnMore} onPress={onComplete}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center"
  },
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
    marginTop: 10,
    textAlign: "center"
  }
});

export default Welcome;

