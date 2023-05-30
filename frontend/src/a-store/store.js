import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../a-features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});