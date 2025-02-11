import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import { productApi } from '../../services/productApi'

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
