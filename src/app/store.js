import { configureStore } from '@reduxjs/toolkit';
import questionsApi from '../features/questions/questions.api';
import usersApi from '../features/users/users.api';
import answersApi from '../features/answers/answers.api';
import usersReducer from '../features/users/users.slice';

const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [answersApi.reducerPath]: answersApi.reducer,
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionsApi.middleware, usersApi.middleware, answersApi.middleware)
})

export default store