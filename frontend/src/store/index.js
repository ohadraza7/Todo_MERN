import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: "", isLoggedIn: false },
  reducers: {
    // reducers are functions that change the state based on clicks or any other events
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      sessionStorage.removeItem("id");
    },
  },
});

export const authActions = authSlice.actions;
export const store = configureStore({
  reducer: authSlice.reducer,
});
