import { createSlice } from '@reduxjs/toolkit';

export interface DragonState {
  value: string;
}

const initialState: DragonState = {
  value: '0',
};

const dragonSlice = createSlice({
  name: 'dragonslice',
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
  selectors: {
    selectDragon: (state: DragonState) => state,
  },
});

// Action creators are generated for each case reducer function
export const { reset } = dragonSlice.actions;

// selectors
export const { selectDragon } = dragonSlice.selectors;

export default dragonSlice.reducer;
