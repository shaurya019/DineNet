import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TaxState {
  totalTax: number;
  taxList: { key: string; value: number; }[]; 
}

const initialState: TaxState = {
  totalTax: 0,
  taxList: [],
};

const taxSlice = createSlice({
  name: 'tax',
  initialState,
  reducers: {
    addTaxData(state, action: PayloadAction<{totalTax: number; taxList: { key: string; value: number; }[] }>) {
      const {totalTax, taxList } = action.payload;
      state.totalTax += totalTax;
      state.taxList.push(...taxList);
    },
    resetTaxData(state) {
      state.totalTax = initialState.totalTax;
      state.taxList = initialState.taxList;
    },
  },
});

export const { addTaxData, resetTaxData } = taxSlice.actions;

export default taxSlice.reducer;
