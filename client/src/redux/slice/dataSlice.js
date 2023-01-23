import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: undefined,
  error: "",
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get(`http://localhost:8080/courses`);
  return response.data;
});

export const postData = createAsyncThunk("postData", async (values) => {
  await axios.post("http://localhost:8080/courses", values);
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  await axios.delete(`http://localhost:8080/courses/${id}`);
});

export const getdataSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = "Data Not Found";
    });
  },
});

export default getdataSlice.reducer;
