import { configureStore } from '@reduxjs/toolkit';
import questionsApi from '../features/questions/questionsApi';
import usersApi from '../features/users/users.api';
import answersApi from '../features/answers/answers.api';

const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [answersApi.reducerPath]: answersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionsApi.middleware, usersApi.middleware, answersApi.middleware)
})

export default store