import { createSlice, Slice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UsersInitState } from '../../types/initState';

const initialState: UsersInitState = {
  loading: false,
  users: [],
  error: '',
};

const fetchUsers: any = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => console.log(response));
});

const userSlice: any = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder: any) => {
    builder.addCase(fetchUsers.pending, (state: any) => {
      state.loading = true;
    })

    builder.addCase(fetchUsers.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    })

    builder.addCase(fetchUsers.rejected, (state: any, action: any) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    })
  },
});

export default userSlice;
// export const { ordered, restocked } = iceCreamSlice.actions;
