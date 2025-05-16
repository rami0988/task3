import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import authReducer from "./authSlice";
import forgetPasswordReducer from './forgetPasswordSlice';
export const store = configureStore({
  reducer: {
    forgetPassword: forgetPasswordReducer,
    users: usersReducer,
    auth: authReducer,
  },
});
export default store;