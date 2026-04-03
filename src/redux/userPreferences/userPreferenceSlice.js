import { createSlice } from "@reduxjs/toolkit";

const userPreferences = createSlice({
  name: "userPreferences",
  initialState: {
    theme: "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});
export const { toggleTheme } = userPreferences.actions;

export default userPreferences.reducer;
