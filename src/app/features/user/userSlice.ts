import { createSlice, Slice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UsersInitState } from '../../types/initState';

const initialState: UsersInitState = {
  loading: false,
  users: [],
  error: '',
};

const fetchUsers: any = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data);
});

const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchUsers.pending, (state: UsersInitState) => {
      state.loading = true;
    })

    builder.addCase(fetchUsers.fulfilled, (state: UsersInitState, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    })

    builder.addCase(fetchUsers.rejected, (state: UsersInitState, action: PayloadAction<string>) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    })
  },
});

export default userSlice;
