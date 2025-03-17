import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DragonState {
  firstDragonId: string | null;
  secondDragonId: string | null;
}

const initialState: DragonState = {
  firstDragonId: null,
  secondDragonId: null,
};

const dragonSlice = createSlice({
  name: 'dragonslice',
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
    setFirstDragon: (state, action: PayloadAction<string>) => {
      state.firstDragonId = action.payload;
    },
    setSecondDragon: (state, action: PayloadAction<string>) => {
      state.secondDragonId = action.payload;
    },
  },
  selectors: {
    selectDragonState: (state: DragonState) => state,
    selectFirstDragon: (state: DragonState) => state.firstDragonId,
    selectSecondDragon: (state: DragonState) => state.secondDragonId,
  },
});

// Action creators are generated for each case reducer function
export const { reset, setFirstDragon, setSecondDragon } = dragonSlice.actions;

// selectors
export const { selectDragonState, selectFirstDragon, selectSecondDragon } =
  dragonSlice.selectors;

export default dragonSlice.reducer;
