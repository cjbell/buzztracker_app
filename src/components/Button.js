import React from "react-native";

const {
  Component,
  Text,
  TouchableOpacity,
  StyleSheet
} = React;

class Button extends Component {
  render() {
    const { text, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 15
  }
});

export default Button;
