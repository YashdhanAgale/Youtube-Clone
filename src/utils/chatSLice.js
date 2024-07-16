import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { LIVE_CHAT_COUNT, OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
