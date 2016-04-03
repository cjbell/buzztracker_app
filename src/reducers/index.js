import { combineReducers } from "redux";

import samplesReducer from "./samplesReducer";
import identificationReducer from "./identificationReducer";

const reducer = combineReducers({
  samples: samplesReducer,
  identification: identificationReducer
});

export default reducer;
