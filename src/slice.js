import { createSlice } from "@reduxjs/toolkit";

// Load from sessionStorage (if available)
const getSessionStorage = (key, defaultValue) => {
  const storedValue = sessionStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

const initialState = {
  email: getSessionStorage("email", ""),
  id: getSessionStorage("id", ""),
  access_token: getSessionStorage("access_token", ""),
  refresh_token: getSessionStorage("refresh_token", ""),
};

export const credentialSlice = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      sessionStorage.setItem("email", JSON.stringify(action.payload));
    },
    setId: (state, action) => {
      state.id = action.payload;
      sessionStorage.setItem("id", JSON.stringify(action.payload));
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
      sessionStorage.setItem("access_token", JSON.stringify(action.payload));
    },
    setRefreshToken: (state, action) => {
      state.refresh_token = action.payload;
      sessionStorage.setItem("refresh_token", JSON.stringify(action.payload));
    },
    clearCredentials: (state) => {
      state.email = "";
      state.id = "";
      state.access_token = "";
      state.refresh_token = "";
      sessionStorage.clear(); // Clear all stored credentials
    },
  },
});

export const { setEmail, setId, setAccessToken, setRefreshToken, clearCredentials } =
  credentialSlice.actions;

export default credentialSlice.reducer;
