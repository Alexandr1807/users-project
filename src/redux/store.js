import { configureStore } from '@reduxjs/toolkit'
import { randomUsersApi } from './randomUsersApi'

export const store = configureStore({
  reducer: {
    [randomUsersApi.reducerPath]: randomUsersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(randomUsersApi.middleware)
});