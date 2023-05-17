import { configureStore } from '@reduxjs/toolkit';
import questionsApi from '../features/questions/questionsApi.slice';

const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionsApi.middleware)
})

export default store