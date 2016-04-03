import React from "react-native";
import Button from "../Button";
import Species from "./Species";

const {
  Component,
  View,
  Text,
  TouchableOpacity
} = React;

class Selection extends Component {
  render() {
    const {
      types,
      step,
      selectType,
      nextStep,
      selected
    } = this.props;

    const buttonTitle = step == 2 ? "Finish" : "Next"

    return (
      <View style={{flex: 1, flexDirection: "column"}}>
        <View style={{height: 65, paddingTop: 30, alignItems: "center", backgroundColor: "#333"}}>
          <Text style={{fontSize: 16, flex: 1, color: "#fff", textAlign: "center"}}>
            Choose the closest match: ({step + 1}/3)
          </Text>
        </View>

        <View style={{flex: 1, padding: 10}}>
          {types.map((type, i) => {
            return (
              <Species
                selectType={selectType}
                type={type}
                selected={selected == type}
                step={step}
                key={i}
              />
            );
          })}

          <TouchableOpacity style={{marginTop: 10}} onPress={() => selectType("none")}>
            <Text style={{textAlign: "center", color: "#666", borderBottomWidth: 1, borderBottomColor: "#666"}}>
              None of the above
            </Text>
          </TouchableOpacity>
        </View>

        {selected &&
          <View style={{padding: 10}}>
            <Button
              text={buttonTitle}
              onPress={nextStep}
            />
          </View>}
      </View>
    );
  }
}

export default Selection;
