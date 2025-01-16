import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  status: "idle" || "loading" || "succeeded" || "failed",
};

export const getUserById = createAsyncThunk("/api/user", async () => {
  try {
    const userId = await axios.get(
      `http://localhost:5001/api/auth/validate-token`,
      { withCredentials: true }
    );

    const res = await axios.get(
      `http://localhost:5001/api/auth/me/${userId.data.user.id}`,
      {
        withCredentials: true,
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserById.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      });
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
