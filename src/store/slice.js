import { createSlice } from "@reduxjs/toolkit";
export const userSearchSlice = createSlice({
  name: "userSearchToolkit",
  initialState: {
    paginateLinkByDefault: "",
    paginateLinkASC: "",
    paginateLinkDESC: "",
    paginateLinkLONG: "",
    usersAsc: [],
    usersDesc: [],
    usersByDefault: [],
  },
  reducers: {
    getPaginateLinkLONG: (state, action) => {
      state.paginateLinkByDefault = action.payload;
    },
    getPaginateLinkByDefault: (state, action) => {
      state.paginateLinkByDefault = action.payload;
    },
    getPaginateLinkASC: (state, action) => {
      state.paginateLinkASC = action.payload;
    },
    getPaginateLinkDESC: (state, action) => {
      state.paginateLinkDESC = action.payload;
    },
    setUsersAsc: (state, action) => {
      state.usersAsc = action.payload;
    },
    setUsersDesc: (state, action) => {
      state.usersDesc = action.payload;
    },
    setUsersByDefault: (state, action) => {
      state.usersByDefault = action.payload;
    },
  },
});

export default userSearchSlice.reducer;
export const {
  getPaginateLinkByDefault,
  getPaginateLinkASC,
  getPaginateLinkDESC,
  getPaginateLinkLONG,
  setUsersAsc,
  setUsersDesc,
  setUsersByDefault,
} = userSearchSlice.actions;
