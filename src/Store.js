import { configureStore } from '@reduxjs/toolkit'
//'@reduxjs/toolkit/query/react'
import { postApi } from './Components/Form/services/PostApi'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})
