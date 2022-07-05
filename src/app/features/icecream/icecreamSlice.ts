import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';
import { IceCreamInitState } from '../../types/initState';

const initialState: IceCreamInitState = {
  totalIceCreams: 10,
};

const iceCreamSlice: any = createSlice({
  name: 'ice cream',
  initialState,
  reducers: {
    ordered: (state: IceCreamInitState) => {
      state.totalIceCreams--;
    },
    restocked: (state: IceCreamInitState, action: PayloadAction<number>) => {
      state.totalIceCreams += action.payload
    }
  },
  // extraReducers: {
  //   ['cake/ordered']: (state: IceCreamInitState) => {
  //     state.totalIceCreams--;
  //   },
  // },
  extraReducers: (builder: any) => {
    builder.addCase(ordered, (state: any) => {
      state.totalIceCreams--;
    })
  },
});

export default iceCreamSlice;
export const { ordered, restocked } = iceCreamSlice.actions;
