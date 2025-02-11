import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductsState {
  selectedMonth: string;
}

const initialState: ProductsState = {
  selectedMonth: 'todos'
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedMonth: (state, action: PayloadAction<string>) => {
      state.selectedMonth = action.payload;
    }
  }
});

export const { setSelectedMonth } = productSlice.actions;
export default productSlice.reducer;