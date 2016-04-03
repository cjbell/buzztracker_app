import React from "react-native";
import { connect } from "react-redux";
import Welcome from "../components/Identification/Welcome";
import Selection from "../components/Identification/Selection";
import Results from "../components/Identification/Results";
import { shuffle, reduce, sortBy } from "lodash";
import { IDENTIFICATION_TYPES } from "../constants";

import {
  progressToNextSection,
  selectType,
  nextStep,
  resetIdentifier
} from "../actions/identificationActions";

const {
  Component,
  View,
  Text
} = React;

const TYPES = [
  ["aedes", "culex", "anopheles"],
  ["aedes", "culex", "anopheles"],
  ["aedes", "culex", "anopheles"]
];

class Identification extends Component {

  state = {
    showWelcomeScreen: true
  };

  constructor(props) {
    super(props);
    this.hideWelcomeScreen = this.hideWelcomeScreen.bind(this);
    this.selectType = this.selectType.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.maybeSubmitResponse = this.maybeSubmitResponse.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetIdentifier());
  }

  hideWelcomeScreen() {
    this.setState({showWelcomeScreen: false});
  }

  maybeSubmitResponse() {
    // Do something
  }

  nextStep() {
    const { dispatch, step } = this.props;
    dispatch(nextStep(step));
  }

  selectType(type) {
    const { dispatch } = this.props;
    dispatch(selectType(type));
  }

  onComplete() {
    const { navigator } = this.props;
    navigator.popToTop();
  }

  render() {
    const { showWelcomeScreen } = this.state;
    const {
      step,
      currentSelection,
      selectableTypes,
      hasStepsToComplete,
      result
    } = this.props;

    if (showWelcomeScreen) {
      return (
        <Welcome
          hide={this.hideWelcomeScreen}
          onComplete={this.onComplete}
        />
      );
    }

    if (!hasStepsToComplete) {
      return (
        <Results
          submitResponse={this.maybeSubmitResponse}
          result={result}
          onComplete={this.onComplete}
        />
      );
    }

    return (
      <Selection
        types={selectableTypes}
        selected={currentSelection}
        step={step}
        selectType={this.selectType}
        nextStep={this.nextStep}
      />
    );
  }
}

function computeResult(selection) {
  return IDENTIFICATION_TYPES.map((type, i) => {
    return {
      type: type,
      weight: computeWeight(selection, type)
    }
  });
}

function computeWeight(selection, type) {
  // How many times does this appear in our selection
  return reduce(selection, (acc, selection) => {
    if (selection == type) {
      return acc + 33;
    }

    return acc;
  }, 0);
}

function mapStateToProps({identification}) {
  const { step, selection } = identification;
  const selectableTypes = IDENTIFICATION_TYPES;
  const hasStepsToComplete = step != 3;
  let result = false;

  if (!hasStepsToComplete) {
    result = computeResult(selection);
  }

  return {
    step,
    result,
    selectableTypes,
    hasStepsToComplete,
    currentSelection: selection[step]
  }
}

export default connect(mapStateToProps)(Identification);
