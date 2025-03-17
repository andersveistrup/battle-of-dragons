import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DragonState {
  firstDragon: string | null;
  secondDragon: string | null;
}

const initialState: DragonState = {
  firstDragon: null,
  secondDragon: null,
};

const dragonSlice = createSlice({
  name: 'dragonslice',
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
    setFirstDragon: (state, action: PayloadAction<string>) => {
      state.firstDragon = action.payload;
    },
    setSecondDragon: (state, action: PayloadAction<string>) => {
      state.secondDragon = action.payload;
    },
  },
  selectors: {
    selectDragonState: (state: DragonState) => state,
    selectFirstDragon: (state: DragonState) => state.firstDragon,
    selectSecondDragon: (state: DragonState) => state.secondDragon,
  },
});

// Action creators are generated for each case reducer function
export const { reset } = dragonSlice.actions;

// selectors
export const { selectDragonState } = dragonSlice.selectors;

export default dragonSlice.reducer;
