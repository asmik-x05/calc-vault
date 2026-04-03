import { combineReducers } from "@reduxjs/toolkit";
import userPreferencesReducer from "./userPreferences/userPreferenceSlice";

const rootReducer = combineReducers({
  userPreferences: userPreferencesReducer,
});
export default rootReducer;
