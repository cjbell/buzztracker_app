import {
  IDENTIFICATION_PROGRESS,
  IDENTIFICATION_SELECT,
  IDENTIFICATION_NEXT_STEP,
  IDENTIFICATION_RESET
} from "../constants";

const initialState = {
  step: 0,
  selection: {
    0: null,
    1: null,
    2: null
  }
};

function identificationReducer(state = initialState, action) {
  switch(action.type) {
    case IDENTIFICATION_RESET:
      return initialState;
    case IDENTIFICATION_PROGRESS:
      return Object.assign({}, state, {currentSection: action.nextSection});
    case IDENTIFICATION_SELECT:
      return Object.assign({}, state, {
        selection: buildIdentificationSelect(state.selection, state.step, action)
      });
    case IDENTIFICATION_NEXT_STEP:
      return Object.assign({}, state, { step: action.step });
    default:
      return state;
  }
}

function buildIdentificationSelect(selection, step, action) {
  return Object.assign({}, selection, {
    [step]: action.sampleType
  })
}

export default identificationReducer;
