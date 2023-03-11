import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from './user/userSlise';

export const store = configureStore({
    reducer: usersReducer,
});