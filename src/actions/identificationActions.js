import {
  IDENTIFICATION_PROGRESS,
  IDENTIFICATION_SELECT,
  IDENTIFICATION_NEXT_STEP,
  IDENTIFICATION_RESET
} from "../constants";

export function progressToNextSection(currentSection) {
  return {
    type: IDENTIFICATION_PROGRESS,
    nextSection: currentSection + 1
  }
}

export function selectType(type) {
  return {
    type: IDENTIFICATION_SELECT,
    sampleType: type
  }
}

export function nextStep(step) {
  return {
    type: IDENTIFICATION_NEXT_STEP,
    step: step + 1
  }
}

export function resetIdentifier() {
  return {
    type: IDENTIFICATION_RESET
  }
}
