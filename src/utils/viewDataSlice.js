import { createSlice } from "@reduxjs/toolkit";

const viewFeed = createSlice({
  name: "viewFeed",
  initialState: null,
  reducers: {
    addViewFeed: (state, actions) => {
      return actions.payload;
    },
    removeViewFeed: () => null,
  },
});

export const { addViewFeed, removeViewFeed } = viewFeed.actions;
export default viewFeed.reducer;
