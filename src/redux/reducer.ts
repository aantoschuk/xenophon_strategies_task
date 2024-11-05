import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface IMessage {
  question: string;
  answer: string;
}

interface IMessagesState {
  messages: IMessage[];
}

const initialState: IMessagesState = {
  messages: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { addMessage } = messageSlice.actions;

export const SelectMessages = (state: RootState) => state.messages.messages;

export default messageSlice.reducer;
