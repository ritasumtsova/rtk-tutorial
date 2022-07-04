import { createSlice, Slice } from '@reduxjs/toolkit';
import { CakesInitState } from '../../types/initState';

const initialState: CakesInitState = {
  totalCakes: 10,
};

const cakeSlice: any = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state: CakesInitState) => {
      state.totalCakes--;
    },
    restocked: (state: CakesInitState, action: any) => {
      state.totalCakes += action.payload
    }
  }
});

export default cakeSlice;
export const { ordered, restocked } = cakeSlice.actions;
